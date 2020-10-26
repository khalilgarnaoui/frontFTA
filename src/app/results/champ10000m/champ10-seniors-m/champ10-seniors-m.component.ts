import { Component, OnInit } from '@angular/core';
import {ChampECService} from '../../../_service/ChampEC';

@Component({
  selector: 'app-champ10-seniors-m',
  templateUrl: './champ10-seniors-m.component.html',
  styleUrls: ['./champ10-seniors-m.component.scss']
})
export class Champ10SeniorsMComponent implements OnInit {
  c: ChampECService;
  public SenM;
  constructor(c: ChampECService ) {
    this.c = c;
  }

  ngOnInit() {
    let a = this.c.getJSON();
    this.SenM = a.DixMillemSEM;
  }

}
