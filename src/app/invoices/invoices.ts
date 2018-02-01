import { Component, OnInit, ViewChild } from '@angular/core';
import { RouterModule, Routes, ActivatedRoute } from '@angular/router';
import { InvoicesService } from './invoices.service';

@Component({
    selector: 'app-root',
    templateUrl: './invoices.html',
    providers: [InvoicesService]
})
// tslint:disable-next-line:component-class-suffix
export class InvoicesComponent implements OnInit {

    dataList: InvoicesService;
    invoicesArray;
    constructor(public data: InvoicesService) {
        this.dataList = data;
    }
    ngOnInit(): void {
        this.getList();
    }
    public getList() {
        this.dataList.getList()
        .subscribe(response => this.invoicesArray = response.json());
    }
}
