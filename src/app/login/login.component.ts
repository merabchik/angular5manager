import { Component, OnInit, ElementRef } from '@angular/core';
import { Http } from '@angular/http';
import { Globals } from '../globals';
import { Router } from '@angular/router';
import { ViewChild } from '@angular/core/src/metadata/di';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {
  router: any;
  global: Globals;
  loading: boolean;
  v_email: any;
  public textMessage = {
    'alert-success': this.validateForm(),
    'alert-danger': !this.validateForm()
  };

  constructor(public http: Http, global: Globals, router: Router) { this.global = global; }

  ngOnInit() {
  }

  validateForm(): boolean {
    return true;
  }

  keyupEmail(event): void {
    this.v_email = event.value;
  }

  onSubmitClick(event): void {
    console.log(this.v_email);
    this.loading = true;
    /*const httpOptions = {
      headers: new Headers({
        'Content-Type': 'application/json',
        'Authorization': 'my-auth-token'
      })
    };*/

    /*this.http
      .post(this.global.apiRoot + '/user/signin/op/login',
      {
        email: pemail.value,
        password: ppassword.value
      })
      .subscribe(data => {
        if (data.json().status === true) {
          localStorage.setItem('sesskey', data.json().sesskey);
          this.router.navigate(['#/']);
        } else {

        }
        this.loading = false;
      });*/
  }

}
