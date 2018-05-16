import { Component, OnInit, HostBinding } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Http } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import { Globals } from '../globals';

@Component({
  selector: 'app-root',
  templateUrl: './applications.component.html',
  styleUrls: ['./applications.component.css'],
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
  route: ActivatedRoute;
  global: Globals;
  loading: boolean;
  title = 'Azomvacomng';
  AppsList;
  constructor(private http: Http, router: Router, route: ActivatedRoute, global: Globals) {
    this.route = route;
    this.global = global;
  }
  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit(): void {
    this.getApps();
  }

  getApps(): void {
    this.loading = true;
    this.http
        .get(this.global.apiRoot + '/apps/get/')
        .subscribe(data => {
            this.AppsList = data.json();
            this.loading = false;
        });
  }

  onEditClick(id): void {
    alert(id);
    // EditAppComponent
  }
}
