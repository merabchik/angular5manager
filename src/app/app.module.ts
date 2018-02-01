import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { ApplicationsComponent } from './applications/applications.component';
import { routing } from './app.routing';
import { Users2Component } from './users2/users2.component';
import { OrdersComponent } from './orders/orders';
import { InvoicesComponent } from './invoices/invoices';
import { CustomPreloading } from './custom-preloading';
import { PageNotFoundComponentComponent } from './errorpages/PageNotFoundComponent.component';


@NgModule({
  declarations: [
    ApplicationsComponent,
    Users2Component,
    OrdersComponent,
    InvoicesComponent,
    PageNotFoundComponentComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    // HttpClientModule,
    BrowserAnimationsModule,
    routing
  ],
  providers: [], // CustomPreloading
  bootstrap: [Users2Component]
})
export class AppModule { }
