import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {KorpaLetovi} from '../modles/Korpa_letovi';
import {RequestOptions} from 'http';

@Injectable()
export class KorpaServiceService {

  httpOptionsToken = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    })
  };


  constructor(private http: HttpClient) { }


  getKorpa(): Observable<KorpaLetovi[]> {
    return this.http.get<KorpaLetovi[]>('http://localhost:8000/api/getKorpa', this.httpOptionsToken);
  }

  deleteLet(korpa_id: number): Observable<any> {
    console.log(korpa_id);
    return this.http.delete<any>('http://localhost:8000/api/deleteKorpa?korpaid=' + korpa_id, this.httpOptionsToken);
  }


}
