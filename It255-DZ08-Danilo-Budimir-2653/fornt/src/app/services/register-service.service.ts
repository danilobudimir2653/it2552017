import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import { Country } from '../modles/Country';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { RegisterUser} from '../modles/RegisterUser';


@Injectable()
export class RegisterServiceService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  };

  constructor(private client: HttpClient) { }

  getCountryes(): Observable<Country[]> {

    return this.client.get<Country[]>('http://127.0.0.1:8000/api/getC', this.httpOptions);

  }

  saveUser(user: RegisterUser): Observable<any> {

    return this.client.post<any>('http://127.0.0.1:8000/api/regUser', user, this.httpOptions);

  }
}





