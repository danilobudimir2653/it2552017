import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {LoginUser} from '../modles/LoginUser';
import {Observable} from 'rxjs/Observable';
import {HeaderComponent} from '../header/header.component';

@Injectable()
export class LoginService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  };

  constructor(private client: HttpClient) { }

  login(user: LoginUser): Observable<any> {
    return this.client.post<any>('http://127.0.0.1:8000/api/login', user, this.httpOptions);

  }

}
