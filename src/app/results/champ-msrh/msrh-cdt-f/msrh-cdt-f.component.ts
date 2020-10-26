import { Component, OnInit } from '@angular/core';
import {ChampMSRHammametService} from '../../../_service/ChampMSRHammamet';

@Component({
  selector: 'app-msrh-cdt-f',
  templateUrl: './msrh-cdt-f.component.html',
  styleUrls: ['./msrh-cdt-f.component.scss']
})
export class MsrhCdtFComponent implements OnInit {
  c: ChampMSRHammametService;
  public Caf;
  constructor(c: ChampMSRHammametService) {
    this.c = c;
  }

  ngOnInit() {
    let h = this.c.getJSON();
    this.Caf = h.CAF;
  }

}
