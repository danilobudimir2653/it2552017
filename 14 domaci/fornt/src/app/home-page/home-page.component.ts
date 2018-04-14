declare function require(path: string);
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.less']
})
export class HomePageComponent implements OnInit {

  slika1 = require('../images/slika1.jpg');
  slika2 = require('../images/slika2.jpg');
  slika3 = require('../images/slika3.jpg');


  constructor() { }

  ngOnInit() {
  }

}
