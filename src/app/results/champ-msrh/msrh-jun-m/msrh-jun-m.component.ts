import { Component, OnInit } from '@angular/core';
import {ChampMSRHammametService} from '../../../_service/ChampMSRHammamet';

@Component({
  selector: 'app-msrh-jun-m',
  templateUrl: './msrh-jun-m.component.html',
  styleUrls: ['./msrh-jun-m.component.scss']
})
export class MsrhJunMComponent implements OnInit {
  c: ChampMSRHammametService;
  public Junm;
  constructor(c: ChampMSRHammametService) {
    this.c = c;
  }
  ngOnInit() {
    let h = this.c.getJSON();
    this.Junm = h.JUM;

  }

}
