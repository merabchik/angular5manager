import { Component, OnInit } from '@angular/core';
import { Http, Response, RequestMethod } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import {
  HttpClientModule,
  HttpClient,
  HttpHeaders,
  HttpRequest
} from '@angular/common/http';
import { HttpParams } from '@angular/common/http/src/params';
import { Globals } from '../globals';

@Component({
  selector: 'app-root',
  templateUrl: './users2.component.html',
  styleUrls: ['./users2.component.scss']
})

export class Users2Component implements OnInit {
  route: any;
  global: Globals;
  data;
  loading: boolean;

  constructor(private http: Http, global: Globals) {
    this.global = global;
  }

  getUsers(): void {
    this.loading = true;
    this.http
      .get(this.global.apiRoot + '/users/get')
      .subscribe(data => {
        this.data = data.json();
        this.loading = false;
      });
  }

  ngOnInit() {
    this.getUsers();
  }
}
