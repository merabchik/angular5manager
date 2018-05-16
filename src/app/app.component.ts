import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Spinkit } from 'ng-http-loader/spinkits';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'Azomva.coM';
  public spinkit = Spinkit;
}


@Component({
  selector: 'app-header',
  templateUrl: './layout/header.html',
})
export class HeaderComponent {
  constructor(private router: Router) { }
  goHome() {
    this.router.navigate(['']);
  }
  goSearch() {
    this.router.navigate(['search']);
  }
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './layout/sidebar.html',
})
export class SidebarComponent {
  constructor(private router: Router) { }
}

