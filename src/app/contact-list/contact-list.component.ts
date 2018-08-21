import { Component, OnInit, Output, EventEmitter, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnChanges {

  @Input() datalist:any[];
  @Input() totalcount:number=0;
  @Output() onselect=new EventEmitter();

  contactStyles = {
    'height': '10px'
  };
  selectedUser:any;

  constructor() { }

  ngOnInit(){
    
  }

  ngOnChanges(changes:SimpleChanges) {
    for (let propName in changes){
      let change = changes[propName];
      let curVal  = change.currentValue;
      if (propName === 'datalist' && curVal){
        this.datalist=curVal;
        this.contactStyles.height=((100/this.totalcount)-2)+'%';
      }
    }
  }

  selectUser(user:any){
    this.selectedUser=user;
    this.onselect.emit(user);
  }

}
