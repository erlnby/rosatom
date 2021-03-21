import {Component, HostBinding, OnInit} from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  @HostBinding('class.tab')
  public tabClass = true;

  constructor() { }

  ngOnInit(): void {
  }

}
