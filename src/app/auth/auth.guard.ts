import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { Globals } from '../globals';

@Injectable()
export class AuthGuard implements CanActivate {
  global: any;
  status: boolean;
  constructor(private router: Router, public http: Http, global: Globals) {
    this.global = global;
    http
      .get(global.apiRoot + '/user/loginstatus/user_id/' + global.user_id + '/sesskey/' + global.sesskey)
      .subscribe(data => {
        localStorage.setItem('sesskey', data.json().sesskey);
        localStorage.setItem('user_id', data.json().id);
      });
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      console.log(this.global.sesskey);
    if (localStorage.getItem('sesskey')) {
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }

}
