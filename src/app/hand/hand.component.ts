import {AfterViewInit, Component, ElementRef, HostBinding, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-hand',
  templateUrl: './hand.component.html',
  styleUrls: ['./hand.component.css']
})
export class HandComponent implements AfterViewInit {
  @HostBinding('class.app-root')
  public hostClass = true;

  @ViewChild('catch')
  private catchRef: ElementRef;

  ngAfterViewInit(): void {
    requestAnimationFrame(() => {
      this.catchRef.nativeElement.style.transform = 'rotate(20deg)';
    });
  }


}
