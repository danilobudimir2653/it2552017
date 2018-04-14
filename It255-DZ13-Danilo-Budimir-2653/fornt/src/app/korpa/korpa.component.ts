import { Component, OnInit } from '@angular/core';
import {KorpaServiceService} from '../services/korpa-service.service';
import {KorpaLetovi} from '../modles/Korpa_letovi';

@Component({
  selector: 'app-korpa',
  templateUrl: './korpa.component.html',
  styleUrls: ['./korpa.component.less']
})
export class KorpaComponent implements OnInit {

  korpa: KorpaLetovi[];

  constructor(private service: KorpaServiceService) { }

  getKorpa() {
    this.service.getKorpa().subscribe(data => this.korpa = data);
  }

  deleteLet(korpaId: number) {
    this.service.deleteLet(korpaId).subscribe(data => (console.log(data)));
    this.getKorpa();
  }

  ngOnInit() {
    this.getKorpa();
  }

}
