import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { ApplicationsComponent } from './applications/applications.component';
import { Users2Component } from './users2/users2.component';
import { OrdersComponent } from './orders/orders';
import { InvoicesComponent } from './invoices/invoices';
import { PageNotFoundComponentComponent } from './errorpages/PageNotFoundComponent.component';


const appRoutes: Routes = [
    {
        path: '', component: Users2Component, data: { preload: true },
        children: [
            {
                path: 'apps',
                component: ApplicationsComponent,
                data: { preload: true }
            },
            {
                path: 'users2',
                component: Users2Component,
                data: { preload: true }
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
        ]
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes,
    {
        useHash: true,
        enableTracing: true,
        initialNavigation: true,
        preloadingStrategy: PreloadAllModules
    });
