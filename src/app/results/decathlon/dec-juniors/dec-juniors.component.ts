import { Component, OnInit } from '@angular/core';
import {ChampECService} from '../../../_service/ChampEC';

@Component({
  selector: 'app-dec-juniors',
  templateUrl: './dec-juniors.component.html',
  styleUrls: ['./dec-juniors.component.scss']
})
export class DecJuniorsComponent implements OnInit {
  d: ChampECService;
  public JunM;
  constructor(d: ChampECService) {
    this.d = d;
  }

  ngOnInit() {
    let dec = this.d.getJSON();
    this.JunM = dec.DecJM;
  }

}
