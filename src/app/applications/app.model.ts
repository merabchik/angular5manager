import { Injectable } from '@angular/core';
import { Globals } from '../globals';

@Injectable()
export class AppModel {
    public id: Number;
    public app_property_type_id: Number;
    public app_property_type_name: String;
    public app_service_type_id: Number;
    public app_service_type_name: String;
    public app_status_id: Number;
    public area: Number;
    public bidscount: Number;
    public cadcode: String;
    public create_date: String;
    public deadlineby_user: String;
    public location_address: String;
    public location_id: Number;
    public location_name: String;
    public lon_lat: String;
    public note: String;
    public status_name: String;
    public status_progress: String;
    public username: String;
    constructor() { }
}

@Injectable()
export class AppPropertyRequisites {
    public id: Number;
    public app_id: Number;
    public app_property_type_id: Number;
    public app_property_type_name: String;
    public location_id: String;
    public location_address: String;
    public address: Number;
    public cadcode: String;
    public area: String;
    public lon_lat: String;
    constructor() {}
}

@Injectable()
export class AppServiceTypes {
    public id: Number;
    public app_id: Number;
    public list_service_type_id: Number;
    public list_service_type_name: String;
    constructor() { }
}

@Injectable()
export class AppBids {
    public id: Number;
    public app_id: Number;
    public offered_price: Number;
    public start_date: String;
    public offer_description: String;
    public create_date: String;
    public user: String;
    public approved: String;
    constructor() { }
}
