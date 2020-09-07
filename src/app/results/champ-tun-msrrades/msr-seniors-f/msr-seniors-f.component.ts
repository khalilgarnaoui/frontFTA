import { Component, OnInit } from '@angular/core';
import {ChampTunMSRRadesService} from '../../../_service/ChampTunMSRRades';

@Component({
  selector: 'app-msr-seniors-f',
  templateUrl: './msr-seniors-f.component.html',
  styleUrls: ['./msr-seniors-f.component.scss']
})
export class MsrSeniorsFComponent implements OnInit {
  c: ChampTunMSRRadesService;
  public Senf;
  constructor(c: ChampTunMSRRadesService) {
    this.c = c;
  }

  ngOnInit() {
    let m = this.c.getJSON();
    this.Senf = m.SenF;
  }

}
