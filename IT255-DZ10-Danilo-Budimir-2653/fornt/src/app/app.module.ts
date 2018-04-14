import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RegisterService} from './register.service';
import {RegisterServiceService} from './services/register-service.service';
import {HttpClientModule} from '@angular/common/http';
import {LoginService} from './services/login.service';
import {LoginedService} from './services/logined.service';
import { SearchFlightsComponent } from './search-flights/search-flights.component';
import {FlyghtServiceService} from './services/flyght-service.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomePageComponent,
    LoginComponent,
    RegisterComponent,
    SearchFlightsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    RegisterServiceService,
    LoginService,
    LoginedService,
    HeaderComponent,
    FlyghtServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
