import { Component, OnInit } from '@angular/core';
import {ChampTunMSRRadesService} from '../../../_service/ChampTunMSRRades';

@Component({
  selector: 'app-msr-juniors-f',
  templateUrl: './msr-juniors-f.component.html',
  styleUrls: ['./msr-juniors-f.component.scss']
})
export class MsrJuniorsFComponent implements OnInit {
  public Junf;
  c: ChampTunMSRRadesService;
  constructor(c: ChampTunMSRRadesService) {
    this.c = c;
  }

  ngOnInit() {
    let m = this.c.getJSON();
    this.Junf = m.JunF;
  }

}
