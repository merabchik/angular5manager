import { Component, OnInit } from '@angular/core';
import { Globals } from '../globals';
import { Http } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contracts',
  templateUrl: './contracts.component.html',
  styleUrls: ['./contracts.component.css']
})
export class ContractsComponent implements OnInit {
  route: ActivatedRoute;
  global: Globals;
  list: any;

  constructor(private http: Http, router: Router, route: ActivatedRoute, global: Globals) {
    this.route = route;
    this.global = global;
   }

  ngOnInit() {
    this.getContracts();
  }
  getContracts(): void {
    this.http
      .get(this.global.apiRoot + '/contracts/')
      .subscribe(data => {
        this.list = data.json();
      });
  }
}
