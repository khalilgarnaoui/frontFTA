import { Component, OnInit } from '@angular/core';
import {ChampMSRHammametService} from '../../../_service/ChampMSRHammamet';

@Component({
  selector: 'app-msrh-sen-f',
  templateUrl: './msrh-sen-f.component.html',
  styleUrls: ['./msrh-sen-f.component.scss']
})
export class MsrhSenFComponent implements OnInit {
  c: ChampMSRHammametService;
  public Senf;
  constructor(c: ChampMSRHammametService) {
    this.c = c;
  }

  ngOnInit() {
    let h = this.c.getJSON();
    this.Senf = h.SEF;

  }

}
