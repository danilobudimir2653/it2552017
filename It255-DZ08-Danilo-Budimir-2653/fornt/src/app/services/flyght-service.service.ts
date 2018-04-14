import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Flyght} from '../modles/Flyght';

@Injectable()
export class FlyghtServiceService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  };

  constructor(private http: HttpClient) { }

  getFlyghts(): Observable<Flyght[]> {
    return this.http.get<Flyght[]>('http://localhost:8000/api/getFlyghts', this.httpOptions);
  }

}
