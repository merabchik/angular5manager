import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes, ActivatedRoute, Router } from '@angular/router';
import { Http, Response, RequestMethod } from '@angular/http';
import { Globals } from '../globals';
import { InvoicesModel } from './invoices.model';

@Component({
    selector: 'app-root',
    templateUrl: './invoices.html'
})

export class InvoicesComponent implements OnInit {
    global: any;
    loading: boolean;
    invoicesList: InvoicesModel;
    constructor(public http: Http, router: Router, global: Globals) {
        this.global = global;
        // router.navigate(['apps']);
    }

    getInvoicesList(): void {
        this.loading = true;
        this.http
            .get(this.global.apiRoot + '/invoices')
            .subscribe(data => {
                this.invoicesList = data.json();
                // console.log(this.invoicesList);
                this.loading = false;
            });
    }

    ngOnInit(): void {
        this.getInvoicesList();
    }
}
