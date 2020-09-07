import { Component, OnInit } from '@angular/core';
import {ChampTunMSRRadesService} from '../../../_service/ChampTunMSRRades';

@Component({
  selector: 'app-msr-juniors-m',
  templateUrl: './msr-juniors-m.component.html',
  styleUrls: ['./msr-juniors-m.component.scss']
})
export class MsrJuniorsMComponent implements OnInit {
  c: ChampTunMSRRadesService;
  public Junm;
  constructor() { }

  ngOnInit() {
    let m = this.c.getJSON();
    this.Junm = m.JunM;
  }
}
