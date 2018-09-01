import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import { Globals } from '../../globals';

@Component({
  selector: 'app-contract.details',
  templateUrl: './contract.details.component.html',
  styleUrls: ['./contract.details.component.scss']
})

export class ContractDetailsComponent implements OnInit {
  global: any;
  route: ActivatedRoute;
  details: any;

  constructor(private http: Http, router: Router, route: ActivatedRoute, global: Globals) {
    this.route = route;
    this.global = global;
  }

  ngOnInit() {
    this.route.params.subscribe(params => this.getContract(params.id));
  }

  getContract(id): void {
    this.http
      .get(this.global.apiRoot + '/contracts/details/id/' + id)
      .subscribe(data => {
        this.details = data.json();
      });
  }

  goBack(): void {
    window.history.back();
  }
}
