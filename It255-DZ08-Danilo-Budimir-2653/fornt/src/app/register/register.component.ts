import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {RegisterService} from '../register.service';
import {RegisterUser} from '../modles/RegisterUser';
import {Country} from '../modles/Country';
import {RegisterServiceService} from '../services/register-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.less']
})
export class RegisterComponent implements OnInit {

  form: FormGroup;
  counttryes: Country[];
  country_id: string;
  newUser: RegisterUser;

  constructor(private fb: FormBuilder, private service: RegisterServiceService) {
    this.createForm();
  }

  createForm() {
    this.form = this.fb.group({
      firstname: '',
      lastname: '',
      sex: '',
      mail: '',
      password: '',

    });
  }

  prepareRegistration() {
    const formModel = this.form.value;
    const user: RegisterUser = {
      firstname: formModel.firstname,
      lastname: formModel.lastname,
      sex: formModel.sex,
      mail: formModel.mail,
      password: formModel.password,
      country_id: this.country_id

    };
    this.newUser = user;
  }

  setCountry() {
    this.service.getCountryes().subscribe(response => this.counttryes = response);
  }

  onClickCountry(country_id: string) {
    this.country_id = country_id;
  }

  submitUser() {
      this.prepareRegistration()
      this.service.saveUser(this.newUser).subscribe(data => console.log(data.massage));
  }


  ngOnInit() {
    this.setCountry();
  }

}
