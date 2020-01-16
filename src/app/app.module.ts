import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore'

import { RegPageComponent } from './auth/reg-page/reg-page.component';
import { LogPageComponent } from './auth/log-page/log-page.component';
import { AccPageComponent } from './acc-page/acc-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { environment } from 'src/environments/environment';
import { from, fromEventPattern } from 'rxjs';

@NgModule({ 
  declarations: [
    AppComponent,
    RegPageComponent,
    LogPageComponent,
    AccPageComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
