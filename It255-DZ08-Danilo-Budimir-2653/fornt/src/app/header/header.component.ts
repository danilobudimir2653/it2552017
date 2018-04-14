import { Component, OnInit } from '@angular/core';
import {UserInfo} from '../modles/UserInfo';
import {LoginedService} from '../services/logined.service';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public user: UserInfo;

  constructor(private http: LoginedService) {

  }






  ngOnInit() {

    this.http.curentUserDetails.subscribe(data => this.user = data);

  }




}
