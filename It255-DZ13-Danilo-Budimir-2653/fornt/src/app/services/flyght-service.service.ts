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
  httpOptionsToken = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    })
  };

  constructor(private http: HttpClient) { }

  getFlyghts(): Observable<Flyght[]> {
    return this.http.get<Flyght[]>('http://localhost:8000/api/getFlyghts', this.httpOptions);
  }

  kupiKartu(id_leta: number): Observable<any>  {
    return this.http.post<any>('http://localhost:8000/api/kupikartu', {'let_id': id_leta}, this.httpOptionsToken);
  }

}
