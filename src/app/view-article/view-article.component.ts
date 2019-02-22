import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsListComponent } from '../news-list/news-list.component';
import {NewsListService} from '../news-list.service';

@Component({
  selector: 'app-view-article',
  templateUrl: './view-article.component.html',
  styleUrls: ['./view-article.component.css'],
  providers: [NewsListService]
})

export class ViewArticleComponent implements OnInit {

  public newsList: any = [];
  constructor(private route: ActivatedRoute, private newsListService: NewsListService) {
    this.newsList = this.newsListService.newsList;
  }
  public article: any;


  ngOnInit() {
    this.route.params.subscribe(params => {
      let articleId = params['id'];
      console.log(articleId);
      this.article = this.newsList.filter(x => x.id == articleId)[0];
      // this.article =  JSON.stringify(this.newsList.filter(x => x.id == articleId)[0]);
      console.log(this.article);

    });

  }

}
