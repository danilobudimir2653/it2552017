import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder} from '@angular/forms';
import { LoginUser} from '../modles/LoginUser';
import {LoginService} from '../services/login.service';
import {LoginedService} from '../services/logined.service';
import {HeaderComponent} from '../header/header.component';
import {UserInfo} from '../modles/UserInfo';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loginUser: LoginUser;
  uspelo: string;
  public user: UserInfo;

  constructor(private fb: FormBuilder, private service: LoginService, private info1: LoginedService, private header: HeaderComponent) {
    this.createForm();
  }

  createForm() {
    this.loginForm = this.fb.group({
      mail: '',
      password: ''

    });

  }

  prepareLogin() {
    const formModel = this.loginForm.value;
    const tmp1: LoginUser = {
      mail: formModel.mail,
      password: formModel.password
    };
    this.loginUser = tmp1;
  }

  onSubmit() {
    this.prepareLogin();
    this.service.login(this.loginUser).subscribe(data => (
        localStorage.setItem('token', data.token),
        this.info1.setUserDetails(data.name, data.lastname, true, 'Log Out')));
        this.header.ngOnInit();



  }



  ngOnInit() {

  }

}
