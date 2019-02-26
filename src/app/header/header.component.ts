import { Component, OnInit } from '@angular/core';
import { NewsListService } from '../news-list.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public data = [];
  title = 'ABC News';
  public currentChannel;
  public currentChannelID = 'abc-news';

  checkSelected(e) {
    if (e.target.checked){
      this.newsListService.isActive = true;
      this.newsListService.isActiveEventEmitter.emit(this.newsListService.isActive);
    } else {
      this.newsListService.isActive = null;
      this.newsListService.isActiveEventEmitter.emit(this.newsListService.isActive);
    }
  }

  public getCurrentChannelName(id) {
    this.currentChannel = this.data.find(function(node) {
      return node.id === id;
    });
    return this.currentChannel.name;
  }

  public onChange(sourceID) {
    this.title = this.getCurrentChannelName(sourceID);
    this.currentChannelID = sourceID;
    this.newsListService.updateID(sourceID);
    console.log(this.currentChannelID);
  }

  constructor(private newsListService: NewsListService) {}

  ngOnInit() {
    this.newsListService.getSources(this.newsListService.sourcesUrl).subscribe((data: any) => {
      this.data = data;
      console.log(data);
    });

    this.newsListService.updateID(this.currentChannelID);
  }

}
