import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { ApplicationsComponent } from './applications/applications.component';
import { Users2Component } from './users2/users2.component';
import { OrdersComponent } from './orders/orders';
import { InvoicesComponent } from './invoices/invoices';
import { CustomPreloading } from './custom-preloading';
import { PageNotFoundComponentComponent } from './errorpages/PageNotFoundComponent.component';
import { Globals } from './globals';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppComponent, HeaderComponent, SidebarComponent } from './app.component';


const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'apps',
    pathMatch: 'full'
  },
  {
    path: 'apps',
    component: ApplicationsComponent,
    data: { preload: true }
  },
  {
    path: 'users2',
    component: Users2Component
  },
  {
    path: 'orders',
    component: OrdersComponent,
    data: { preload: true }
  },
  {
    path: 'invoices',
    component: InvoicesComponent,
    data: { preload: true }
  },
  {
    path: '**',
    component: PageNotFoundComponentComponent
  }
];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
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
    RouterModule.forRoot(appRoutes,
      {
        useHash: true
      })
  ],
  providers: [Globals], // CustomPreloading
  bootstrap: [AppComponent, HeaderComponent, SidebarComponent]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
