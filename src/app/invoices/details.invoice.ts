import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes, ActivatedRoute, Router } from '@angular/router';
import { Http, Response, RequestMethod } from '@angular/http';
import { Globals } from '../globals';
import { InvoicesModel } from './invoices.model';

@Component({
    selector: 'app-root',
    templateUrl: './details.html'
})

// tslint:disable-next-line:component-class-suffix
export class DetailsInvoice implements OnInit {
    route: ActivatedRoute;
    id: Number;
    global: any;
    loading: boolean;
    invoicesList: InvoicesModel;
    constructor(public http: Http, router: Router, route: ActivatedRoute, global: Globals) {
        this.global = global;
        this.route = route;
        // router.navigate(['apps']);
    }

    ngOnInit(): void {
        this.route.params.subscribe(params => this.getDetails(params.id));
    }

    getDetails(id: Number): void {
        this.id = id;
        this.loading = true;
        this.http
            .get(this.global.apiRoot + '/invoices/details/' + this.id)
            .subscribe(data => {
                this.invoicesList = data.json();
                console.log(this.invoicesList);
                this.loading = false;
            });
    }

    goBack(): void {
        window.history.back();
    }
}
