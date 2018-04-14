import { Injectable } from '@angular/core';
import {UserInfo} from '../modles/UserInfo';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';
import {HeaderComponent} from '../header/header.component';

@Injectable()
export class LoginedService {

  private userDetails: BehaviorSubject<UserInfo> = new BehaviorSubject({name: 'Sign In', lastname: 'Sign Out', isLogined: false, logout: 'Log Out'});
  curentUserDetails = this.userDetails.asObservable();





  constructor() { }

  setUserDetails(first_name: string, last_name: string, isLogined: boolean, logout: string) {

    const tmp: UserInfo = {name: first_name, lastname: last_name , isLogined: isLogined, logout: logout};
    this.userDetails.next(tmp);
  }



}
