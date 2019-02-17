import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public isActive: boolean = null;

  checkSelected(e) {
    if(e.target.checked){
      this.isActive = true;
    } else { this.isActive = null; }
 }

  title = 'BBC News';
  constructor() { }

  ngOnInit() {
  }

}
