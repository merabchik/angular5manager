import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';


@Injectable()
export class Globals {

    public apiRoot = 'http://azomva.com/rest';
    public token: String;
    public user_id: String;
    public UserJson: JSON;

    constructor(private router: Router, public http: Http) { }

    public SignOut() {
        localStorage.removeItem('token');
        localStorage.removeItem('user_id');
        this.router.navigate(['/login']);
    }
}

