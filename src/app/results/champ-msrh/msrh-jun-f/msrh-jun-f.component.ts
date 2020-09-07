import { Component, OnInit } from '@angular/core';
import {ChampMSRHammametService} from '../../../_service/ChampMSRHammamet';

@Component({
  selector: 'app-msrh-jun-f',
  templateUrl: './msrh-jun-f.component.html',
  styleUrls: ['./msrh-jun-f.component.scss']
})
export class MsrhJunFComponent implements OnInit {
  c: ChampMSRHammametService;
  public Junf;
  p=1;
  constructor(c: ChampMSRHammametService) {
    this.c = c;
  }

  ngOnInit() {
    let h = this.c.getJSON();
    this.Junf = h.JUF;
  }

}
