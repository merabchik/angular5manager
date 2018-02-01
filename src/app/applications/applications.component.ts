import { Component, OnInit, HostBinding } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { AppsService } from './applications.service';

@Component({
  selector: 'app-root',
  templateUrl: './applications.component.html',
  styleUrls: ['./applications.component.css'],
  providers: [AppsService],
  animations: [
    trigger('slideInOut', [
      state('in', style({
        transform: 'translate3d(0, 0, 0)'
      })),
      state('out', style({
        transform: 'translate3d(100%, 0, 0)'
      })),
      transition('in => out', animate('400ms ease-in-out')),
      transition('out => in', animate('400ms ease-in-out'))
    ])
  ]
})
export class ApplicationsComponent {
  title = 'Azomvacomng';
  AppsList;
  AppsListT: AppsService;
  constructor(public data: AppsService) {
    this.AppsListT = data;
  }
  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit(): void {
    this.AppsListT.getList()
      .subscribe(response => this.AppsList = response.json());
  }
}
