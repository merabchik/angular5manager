import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.html',
})
class HeaderComponent {
    constructor(private router: Router) { }
    goHome() {
        this.router.navigate(['']);
    }
    goSearch() {
        this.router.navigate(['search']);
    }
}
