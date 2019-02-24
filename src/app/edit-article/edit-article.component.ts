import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {NewsListService} from '../news-list.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-edit-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['./edit-article.component.css']
})
export class EditArticleComponent implements OnInit {

  public newsList: any = [];
  constructor(private route: ActivatedRoute, private newsListService: NewsListService, private location: Location) {
    this.newsList = this.newsListService.newsList;
  }

  public article: any;
  
  options = "true";
  
  goBack() {
    this.location.back();
    console.log( 'goBack()...' );
  }
  
  saved() {
    console.log( 'saved...' );
  }
  
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
