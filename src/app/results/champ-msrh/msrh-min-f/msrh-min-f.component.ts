import { Component, OnInit } from '@angular/core';
import {ChampMSRHammametService} from '../../../_service/ChampMSRHammamet';

@Component({
  selector: 'app-msrh-min-f',
  templateUrl: './msrh-min-f.component.html',
  styleUrls: ['./msrh-min-f.component.scss']
})
export class MsrhMinFComponent implements OnInit {
  c: ChampMSRHammametService;
  public Minf;
  constructor(c: ChampMSRHammametService) {
    this.c = c;
  }

  ngOnInit() {
    let h = this.c.getJSON();
    this.Minf = h.MinF;
  }

}
