import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent implements OnChanges {

  @Input() selectedContact:any;
  likeAndDislike:any[];
  ratings:any[]=[1,2,3,4,5];
  constructor() { }

  ngOnChanges(changes:SimpleChanges) {
    for (let propName in changes){
      let change = changes[propName];
      let curVal  = change.currentValue;
      if (propName === 'selectedContact'){
        this.selectedContact=curVal;
      }
    }
  }
}
