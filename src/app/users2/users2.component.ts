import { Component, OnInit } from '@angular/core';
import { Users2Service } from './users2.service';
import { Http, Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './users2.component.html',
  styleUrls: ['./users2.component.scss'],
  providers: [Users2Service]
})

export class Users2Component implements OnInit {

  Users2List;
  serviceT: Users2Service;
  constructor(public data: Users2Service) {
    this.serviceT = data;
  }

  ngOnInit() {
    // this.serviceT.getList().subscribe(response => this.Users2List = response.json());
  }
}
