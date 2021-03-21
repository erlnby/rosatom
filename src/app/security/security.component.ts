import {Component, HostBinding, OnInit} from '@angular/core';

@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.css']
})
export class SecurityComponent implements OnInit {
  @HostBinding('class.tab')
  public tabClass = true;

  constructor() { }

  ngOnInit(): void {
  }

}
