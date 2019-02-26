import { Component, OnInit } from '@angular/core';
import { NewsListService } from '../news-list.service';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']

})

@NgModule({
  declarations: [
  ],
  imports: [
    RouterModule,
  ],
})

export class NewsListComponent implements OnInit {

  show = 5;
  increaseShow() {
    this.show += 5;
  }

  public isActive: boolean = null;

  // public newsList: any = [];

  constructor(private newsListService: NewsListService) {
    // this.newsList = this.newsListService.newsList;
  }

  ngOnInit() {
    this.newsListService.isActiveEventEmitter.subscribe((status: boolean) => {
      this.isActive = status;
      console.log(status);
    });
  }

}
