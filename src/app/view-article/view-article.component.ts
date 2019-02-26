import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsListComponent } from '../news-list/news-list.component';
import {NewsListService} from '../news-list.service';

@Component({
  selector: 'app-view-article',
  templateUrl: './view-article.component.html',
  styleUrls: ['./view-article.component.css'],
  // providers: [NewsListService]
})

export class ViewArticleComponent implements OnInit {

  public isActive: boolean = null;

  // public newsList: any = [];
  constructor(private route: ActivatedRoute, private newsListService: NewsListService) {
    // this.newsList = this.newsListService.newsList;
  }

  public article: any;


  ngOnInit() {
    this.route.params.subscribe(params => {
      let articleId = params['id'];
      this.article = this.newsListService.newsList[+articleId];
      console.log(this.newsListService.newsList);

    });

    this.newsListService.isActiveEventEmitter.subscribe((status: boolean) => {
      this.isActive = status;
      console.log(status);
    });
  }

}

