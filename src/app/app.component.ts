import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent {
  title = 'Azomva.coM';
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

