import { Component, OnInit, ViewChild } from '@angular/core';
import { RouterModule, Routes, ActivatedRoute } from '@angular/router';
import { OrdersService } from './orders.service';

@Component({
    selector: 'app-root',
    templateUrl: './orders.html',
    providers: [OrdersService]
})
// tslint:disable-next-line:component-class-suffix
export class OrdersComponent implements OnInit {

    dataList: OrdersService;
    ArrayDataList;
    constructor(public data: OrdersService) {
        this.dataList = data;
    }
    ngOnInit(): void {
        this.getList();
    }
    public getList() {
        this.dataList.getList()
        .subscribe(response => this.ArrayDataList = response.json());
    }
}
