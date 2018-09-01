import { Component, OnInit, HostBinding } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Http, Response, RequestMethod } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import { Globals } from '../globals';
import { AppModel, AppPropertyRequisites, AppServiceTypes, AppBids } from './app.model';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DatePipe } from '@angular/common';

export enum SaveMode {
    None,
    New,
    Edit
}

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    animations: [
        trigger('slideInOut', [
            state('in', style({
                transform: 'translate3d(0, 0, 0)'
            })),
            state('out', style({
                transform: 'translate3d(100%, 0, 0)'
            })),
            transition('in => out', animate('400ms ease-in-out')),
            transition('out => in', animate('400ms ease-in-out'))
        ])
    ]
})

export class EditAppComponent {
    formGroup: FormGroup;
    id: Number;
    route: any;
    global: any;
    loading: boolean;
    title = 'Azomvacomng';
    App: any;
    vAppPropertyRequisites: AppPropertyRequisites;
    vBids: AppBids;
    saveMode: SaveMode = SaveMode.None;

    constructor(public http: Http, route: ActivatedRoute, global: Globals, private _formBuilder: FormBuilder) {
        this.route = route;
        this.global = global;
        this.formGroup = _formBuilder.group({
            'id': '',
            'area': '',
            'cadcode': '',
            'done': '',
            'notes': ''
        });
        // this.App = new AppModel();
        // this.vAppPropertyRequisites = new AppPropertyRequisites();
    }

    // tslint:disable-next-line:use-life-cycle-interface
    ngOnInit(): void {
        this.route.params.subscribe(params => this.getApp(params.id));
    }

    getApp(id): void {
        this.id = id;
        this.loading = true;

        this.global.MyGet('/apps/details/?sesskey=' + this.global.token + '&user_id=' + this.global.user_id + '&app_id=' + id)
            .subscribe(data => {
                this.App = data.json().app_fields;
                this.vBids = data.json().bids;
                this.vAppPropertyRequisites = data.json().app_property_requisites;
                this.loading = false;
                console.log(this.App);
                console.log(this.vBids);
                console.log(this.vAppPropertyRequisites);
            });
    }

    onSearch(term: string) {
        this.route.navigate(['search', term]);
    }

    goBack(): void {
        window.history.back();
    }



    saveApp(app: AppModel) {
        console.log(app);
    }

    removeApp(app: AppModel) {
        console.log(app);
    }

    cancelEditApp() {
        this.formGroup.reset();
        this.saveMode = SaveMode.None;
    }

    showEditForm(app: AppModel) {
        if (!app) {
            return;
        }
        this.saveMode = SaveMode.Edit;
        const editedApp = Object.assign({}, app, { area: this.applyLocale(app.area) });
        this.formGroup.setValue(editedApp);
    }

    showNewForm() {
        this.formGroup.reset();
        this.saveMode = SaveMode.New;
    }

    showForm() {
        return this.saveMode !== SaveMode.None;
    }

    applyLocale(create_date) {
        return new DatePipe(navigator.language).transform(create_date, 'y-MM-dd');
    }
}
