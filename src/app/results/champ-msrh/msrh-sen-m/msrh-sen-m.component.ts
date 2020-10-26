import {Component, OnInit} from '@angular/core';
import {ChampMSRHammametService} from '../../../_service/ChampMSRHammamet';

@Component({
  selector: 'app-msrh-sen-m',
  templateUrl: './msrh-sen-m.component.html',
  styleUrls: ['./msrh-sen-m.component.scss']
})
export class MsrhSenMComponent implements OnInit {
  c: ChampMSRHammametService;
  public Senm;

  constructor(c: ChampMSRHammametService) {
    this.c = c;
  }

  ngOnInit() {
    let h = this.c.getJSON();
    this.Senm = h.SEM;
  }

}
