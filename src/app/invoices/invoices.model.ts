import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class InvoicesModel {
    public id: Number;
    public user_id: Number;
    public payed: Number;
    public create_date: String;
    public user: Object;
    public details: Object;
    constructor() { }
}
