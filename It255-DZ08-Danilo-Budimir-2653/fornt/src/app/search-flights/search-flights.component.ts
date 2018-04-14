import { Component, OnInit } from '@angular/core';
import {FlyghtServiceService} from '../services/flyght-service.service';
import {Flyght} from '../modles/Flyght';

@Component({
  selector: 'app-search-flights',
  templateUrl: './search-flights.component.html',
  styleUrls: ['./search-flights.component.less']
})
export class SearchFlightsComponent implements OnInit {


  flyghts: Flyght[];

  constructor(private service: FlyghtServiceService) { }

  getSearchFlyghts() {
    this.service.getFlyghts().subscribe(data => this.flyghts = data);
  }
  kupi(let_id: number) {
  console.log(let_id);
  }

  ngOnInit() {
    this.getSearchFlyghts();
  }




}
