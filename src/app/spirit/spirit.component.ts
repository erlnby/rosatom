import {Component, HostBinding, OnInit} from '@angular/core';

@Component({
  selector: 'app-spirit',
  templateUrl: './spirit.component.html',
  styleUrls: ['./spirit.component.css']
})
export class SpiritComponent implements OnInit {
  @HostBinding('class.tab')
  public tabClass = true;

  constructor() { }

  ngOnInit(): void {
  }

}
