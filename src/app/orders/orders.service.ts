import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Globals } from '../globals';


@Injectable()
export class OrdersService {
    _http: Http;
    global: any;
    constructor(public http: Http, global: Globals) {
        this._http = http;
        this.global = global;
    }

    public getList() {
        return this._http.get(this.global.apiRoot + '/apps/get/');
    }

    public getApp(id) {
        return this._http.get(this.global.apiRoot + '/apps/details/app_id/' + id + '/user_id/27/sesskey/2f8cc07c57901535855bd4c756b889b2');
    }

}
