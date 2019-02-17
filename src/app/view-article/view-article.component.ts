import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsListComponent } from '../news-list/news-list.component';

@Component({
  selector: 'app-view-article',
  templateUrl: './view-article.component.html',
  styleUrls: ['./view-article.component.css']
})

export class ViewArticleComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      let articleId = params['id'];
      console.log(articleId);
      // let article =  NewsListComponent.newsList.filter(x => x.id == articleId)[0];
      
    });

  }

}
