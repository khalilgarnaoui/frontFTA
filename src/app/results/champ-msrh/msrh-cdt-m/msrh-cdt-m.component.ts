import { Component, OnInit } from '@angular/core';
import {ChampMSRHammametService} from '../../../_service/ChampMSRHammamet';

@Component({
  selector: 'app-msrh-cdt-m',
  templateUrl: './msrh-cdt-m.component.html',
  styleUrls: ['./msrh-cdt-m.component.scss']
})
export class MsrhCdtMComponent implements OnInit {
  c: ChampMSRHammametService;
  public Cam;
  constructor(c: ChampMSRHammametService) {
    this.c = c;
  }

  ngOnInit() {
    let h = this.c.getJSON();
    this.Cam = h.CAM;
  }

}
