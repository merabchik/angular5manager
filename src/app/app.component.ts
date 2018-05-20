import { Component, ElementRef, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Spinkit } from 'ng-http-loader/spinkits';
import { Globals } from './globals';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'Azomva.coM';
  public spinkit = Spinkit;
  constructor(private router: Router, elementRef: ElementRef) { }
}

@Component({
  selector: 'app-header',
  templateUrl: './layout/header.html',
})
export class HeaderComponent {
  globals: any;
  constructor(private router: Router, globals: Globals) {
    this.globals = globals;
  }
  goHome() {
    this.router.navigate(['']);
  }
  goSearch() {
    this.router.navigate(['search']);
  }
  EventSignOut(event) {
    this.globals.SignOut();
  }
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './layout/sidebar.html',
})
export class SidebarComponent {
  constructor() { }
}

