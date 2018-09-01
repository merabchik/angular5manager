import { Component, OnInit, ElementRef, Input } from '@angular/core';
import { Http, RequestOptionsArgs } from '@angular/http';
import { Globals } from '../globals';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ViewChild } from '@angular/core/src/metadata/di';
import { FormControl, FormGroup, Validators, RequiredValidator } from '@angular/forms';
import { Button } from 'protractor';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  loading: boolean;
  v_email: any;
  v_password: any;
  public textMessage = {
    'alert-success': this.validateForm(),
    'alert-danger': !this.validateForm()
  };
  UserLogin: any;

  constructor(public http: Http, private global: Globals, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    /* this.loginFormGroup = new FormGroup({
       email: new FormControl('', [Validators.required, Validators.minLength(8)]),
       password: new FormControl('', [Validators.required, Validators.minLength(8)])
     });*/
  }

  validateForm(): boolean {
    return true;
  }

  keyupEmail(event): void {
    this.v_email = event.path[0].value;
  }

  keyupPassword(event): void {
    this.v_password = event.path[0].value;
  }

  onSubmitClick(event): void {
    this.loading = true;
    const fd = new FormData();
    fd.append('email', this.v_email);
    fd.append('password', this.v_password);
    this.global.MyPost('/user/signin/op/login', fd).subscribe((data) => {
      this.UserLogin = data.json();
      if (this.UserLogin.loginstatus === 1) {
        localStorage.setItem('token', this.UserLogin.sesskey);
        localStorage.setItem('user_id', this.UserLogin.id);
        this.global.token = this.UserLogin.sesskey;
        this.global.user_id = this.UserLogin.id;
        this.activatedRoute.queryParams.subscribe((params: Params) => {
          this.router.navigate(['/' + params.returnUrl]);
        });
      } else {

      }
    });
    /*
       subscribe(
         data => {
           console.log(data);
           if (data.loginstatus === 1) {
             localStorage.setItem('token', data.sesskey);
             this.activatedRoute.queryParams.subscribe((params: Params) => {
               this.router.navigate(['/' + params.returnUrl]);
             });
           } else {

           }
         },
         error => console.log(error)
       );*/


    /* this.http
       .post(this.global.apiRoot + '/user/signin/op/login', fd)
       .subscribe(data => {
         if (data.json().loginstatus === 1) {
           localStorage.setItem('token', data.json().sesskey);

           this.activatedRoute.queryParams.subscribe((params: Params) => {
             this.router.navigate(['/' + params.returnUrl]);
           });
         } else {

         }
         this.loading = false;
       });*/
  }

}

export interface UserLogin {
  email: String;
  password: String;
  fullname: string;
  op: String;
  remember: Number;
}
