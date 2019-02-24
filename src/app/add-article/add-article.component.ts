import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.css']
})
export class AddArticleComponent implements OnInit {

  constructor(private location: Location) { }

  options = "true";
  
  goBack() {
    this.location.back();
    console.log( 'goBack()...' );
  }
  
  saved() {
    console.log( 'saved...' );
  }
  
  ngOnInit() {
  }

}
