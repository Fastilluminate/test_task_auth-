import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePageComponent } from './home-page/home-page.component';

import { RegPageComponent } from './reg-page/reg-page.component';
import { LogPageComponent } from './log-page/log-page.component';
import { AccPageComponent } from './acc-page/acc-page.component';
import { from } from 'rxjs';


const routes: Routes = [
    { path: '', component: HomePageComponent},
    { path: 'register', component: RegPageComponent},
    { path: 'login', component: LogPageComponent},
    { path: 'acc', component: AccPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
