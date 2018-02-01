import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class OrdersService {
    _http: Http;
    constructor(public http: Http) {
        this._http = http;
    }

    public getList() {
        return this._http.get('http://azomva.com/rest/apps/get/');
    }

    public getApp(id) {
        return this._http.get('http://azomva.com/rest/apps/details/app_id/' + id + '/user_id/27/sesskey/2f8cc07c57901535855bd4c756b889b2');
    }

}
