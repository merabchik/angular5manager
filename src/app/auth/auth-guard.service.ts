import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Http } from '@angular/http';
import { Globals } from '../globals';
import { not } from 'rxjs/internal/util/not';
import { equal } from 'assert';

export interface UserResponseInt {
    id: Number;
    user_type_id: number;
    user_status_id: Number;
    rating: Number;
    full_name: String;
    phone: Number;
    email: String;
    regipaddr: String;
    sesskey: String;
    loginstatus: Boolean;
    isSetLocations: Boolean;
}

@Injectable()
export class AuthGuardService implements CanActivate {
    jwtHelper: any;
    global: any;
    response: UserResponseInt;
    constructor(private router: Router, public http: Http, global: Globals) {
        this.global = global;
        global.token = localStorage.getItem('token');
        global.user_id = localStorage.getItem('user_id');
        http.get(global.apiRoot + '/user/loginstatus/user_id/' + global.user_id + '/sesskey/' + global.token)
            .subscribe(data => {
                if (data.json().loginstatus === 1) {
                    this.global.UserJson = data.json();
                    localStorage.setItem('token', data.json().sesskey);
                    localStorage.setItem('user_id', data.json().id);
                }
            });
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        // console.log(this.global.token);
        console.log('token: ' + localStorage.getItem('token'));
        if (localStorage.getItem('token') === '' || localStorage.getItem('token') === null) {
            this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
            return false;
        } else {
            return true;
        }
    }

    public isAuthenticated(): boolean {
        const token = localStorage.getItem('token');
        // Check whether the token is expired and return
        // true or false
        console.log(this.global.UserJson);
        return !this.jwtHelper.isTokenExpired(token);
    }
}
