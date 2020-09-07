import { Component, OnInit } from '@angular/core';
import {ChampTunMSRRadesService} from '../../../_service/ChampTunMSRRades';

@Component({
  selector: 'app-msr-juniors',
  templateUrl: './msr-juniors.component.html',
  styleUrls: ['./msr-juniors.component.scss']
})
export class MsrJuniorsComponent implements OnInit {
  c: ChampTunMSRRadesService;
  public Jun;

  constructor(c: ChampTunMSRRadesService) {
    this.c = c;
  }

  ngOnInit() {
    let m = this.c.getJSON();
    this.Jun = m.ChampRSJ;
  }
}
