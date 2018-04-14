import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomePageComponent} from './home-page/home-page.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {SearchFlightsComponent} from './search-flights/search-flights.component';
import {KorpaLetovi} from './modles/Korpa_letovi';
import {KorpaComponent} from './korpa/korpa.component';

const routes: Routes = [
  { path: '', component: HomePageComponent},
  { path: 'login' , component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'letovi', component: SearchFlightsComponent },
  { path: 'korpa', component: KorpaComponent}
];
@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule {}



