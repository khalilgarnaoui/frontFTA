import { Component, OnInit } from '@angular/core';
import {ChampMSRHammametService} from '../../../_service/ChampMSRHammamet';

@Component({
  selector: 'app-msrh-min-m',
  templateUrl: './msrh-min-m.component.html',
  styleUrls: ['./msrh-min-m.component.scss']
})
export class MsrhMinMComponent implements OnInit {
  c: ChampMSRHammametService;
  public Minm;
  p=1;
  constructor(c: ChampMSRHammametService) {
    this.c = c;
  }
  ngOnInit() {
    let h = this.c.getJSON();
    this.Minm = h.MinM;

  }

}
