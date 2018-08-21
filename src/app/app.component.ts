import { Component, OnInit } from '@angular/core';
import { ContactService } from './contact.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'my-contacts';

  contactList: any[]=[];
  filterdList: any[]=[];
  selectedUser: any;

  constructor(private contactService: ContactService) {

  }
  ngOnInit() {
    this.contactService.getContactList().subscribe((data: any) => {
      this.contactList = data.People;
      this.filterdList=data.People;
      // this.contactStyles.height=((100/this.contactList.length)-2)+'%';
    })
  }

  selectUser(user: any) {
    this.selectedUser = user;
  }

  searchTextChange(searchtext: string) {
    this.filterdList = this.contactList.filter((contact) => {
      if (contact.name.indexOf(searchtext) > -1) {
        return true;
      } else {
        return false;
      }
    })
  }

}
