import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { HttpModule } from '@angular/http';
import { NgHttpLoaderModule } from 'ng-http-loader/ng-http-loader.module';
import { ApplicationsComponent } from './applications/applications.component';
import { Users2Component } from './users2/users2.component';
import { OrdersComponent } from './orders/orders';
import { InvoicesComponent } from './invoices/invoices';
import { PageNotFoundComponentComponent } from './errorpages/PageNotFoundComponent.component';
import { Globals } from './globals';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppComponent, HeaderComponent, SidebarComponent } from './app.component';
import { EditAppComponent } from './applications/editapp.component';
import { DetailsInvoice } from './invoices/details.invoice';
import { ContractsComponent } from './contracts/contracts.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthGuardService } from './auth/auth-guard.service';
import { ContractDetailsComponent } from './contracts/details/contract.details.component';


const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'apps',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'apps',
    component: ApplicationsComponent,
    data: { preload: true },
    canActivate: [
      AuthGuardService
    ]
    /*children: [{
      path: 'editapp/:id', component: EditAppComponent
    }]*/
  },
  {
    path: 'editapp/:id', component: EditAppComponent,
    canActivate: [
      AuthGuardService
    ]
  },
  {
    path: 'users2',
    component: Users2Component,
    data: { preload: true },
    canActivate: [
      AuthGuardService
    ]
  },
  {
    path: 'orders',
    component: OrdersComponent,
    data: { preload: true },
    canActivate: [
      AuthGuardService
    ]
  },
  {
    path: 'invoices',
    component: InvoicesComponent,
    data: { preload: true },
    canActivate: [
      AuthGuardService
    ]
  },
  {
    path: 'invoices/details/:id',
    component: DetailsInvoice,
    canActivate: [
      AuthGuardService
    ]
  },
  {
    path: 'contracts',
    component: ContractsComponent,
    canActivate: [
      AuthGuardService
    ]
  },
  {
    path: 'contracts/details/:id',
    component: ContractDetailsComponent,
    canActivate: [
      AuthGuardService
    ]
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
    DetailsInvoice,
    EditAppComponent,
    PageNotFoundComponentComponent,
    ContractsComponent,
    ContractDetailsComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    NgHttpLoaderModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes,
      {
        useHash: true
      })
  ],
  providers: [Globals, AuthGuardService],
  bootstrap: [AppComponent, HeaderComponent, SidebarComponent]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
