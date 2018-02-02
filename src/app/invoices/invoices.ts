import { Component, OnInit, ViewChild } from '@angular/core';
import { RouterModule, Routes, ActivatedRoute, Router } from '@angular/router';
import { Http } from '@angular/http';
import { Globals } from '../globals';

@Component({
    selector: 'app-root',
    templateUrl: './invoices.html'
})
// tslint:disable-next-line:component-class-suffix
export class InvoicesComponent implements OnInit {
    global: any;
    loading: boolean;
    invoicesArray;
    invoicesList: any;
    constructor(public http: Http, router: Router, global: Globals) {
        router.navigate(['apps']);
    }
    ngOnInit(): void {
        this.getInvoicesList();
    }

    getInvoicesList(): void {
        this.loading = true;
        this.http
          .get(this.global.apiRoot + '/users/get')
          .subscribe(data => {
            this.invoicesList = data.json();
            this.loading = false;
          });
      }
}
