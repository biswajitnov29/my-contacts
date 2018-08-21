import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() searchtextchange=new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  onSearchChange(value:string){
    this.searchtextchange.emit(value);
  }

}
