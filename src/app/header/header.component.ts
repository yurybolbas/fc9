import { Component, OnInit } from '@angular/core';
import { NewsListService } from '../news-list.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  checkSelected(e) {
    if (e.target.checked){
      this.newsListService.isActive = true;
      this.newsListService.isActiveEventEmitter.emit(this.newsListService.isActive);
    } else {
      this.newsListService.isActive = null;
      this.newsListService.isActiveEventEmitter.emit(this.newsListService.isActive);
    }
 }

  title = 'BBC News';
  constructor(private newsListService: NewsListService) {}

  ngOnInit() {
  }

}
