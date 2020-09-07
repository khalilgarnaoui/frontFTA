import { Component, OnInit } from '@angular/core';
import {ChampTunMSRRadesService} from "../../../_service/ChampTunMSRRades";

@Component({
  selector: 'app-msr-seniors-m',
  templateUrl: './msr-seniors-m.component.html',
  styleUrls: ['./msr-seniors-m.component.scss']
})
export class MsrSeniorsMComponent implements OnInit {
  c: ChampTunMSRRadesService;
  public Senm;
  constructor(c: ChampTunMSRRadesService) {
    this.c = c;
  }

  ngOnInit() {
    let m = this.c.getJSON();
    this.Senm = m.SenM;
  }

}
