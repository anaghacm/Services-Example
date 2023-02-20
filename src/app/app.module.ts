import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './homepage/home/home.component';
import { RegisterComponent } from './homepage/register/register.component';
import {HttpClientModule} from '@angular/common/http';
import { UserhomeComponent } from './dashboard/userhome/userhome.component';
import { CountryInfoComponent } from './dashboard/country-info/country-info.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    UserhomeComponent,
    CountryInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
