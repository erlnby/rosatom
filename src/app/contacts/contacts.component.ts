import {Component, HostBinding, OnInit} from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  @HostBinding('class.tab')
  public tabClass = true;

  constructor() { }

  ngOnInit(): void {
  }

}
