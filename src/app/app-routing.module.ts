import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePageComponent } from './home-page/home-page.component';

import { RegPageComponent } from './auth/reg-page/reg-page.component';
import { LogPageComponent } from './auth/log-page/log-page.component';
import { AccPageComponent } from './acc-page/acc-page.component';
import { from } from 'rxjs';


const routes: Routes = [
    { path: '', redirectTo: '/home',pathMatch:'full'},
    { path: 'home', component: HomePageComponent},
    { path: 'register', component: RegPageComponent},
    { path: 'login', component: LogPageComponent},
    { path: 'account', component: AccPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
