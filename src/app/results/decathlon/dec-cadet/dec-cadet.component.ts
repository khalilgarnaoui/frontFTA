import { Component, OnInit } from '@angular/core';
import {ChampECService} from '../../../_service/ChampEC';

@Component({
  selector: 'app-dec-cadet',
  templateUrl: './dec-cadet.component.html',
  styleUrls: ['./dec-cadet.component.scss']
})
export class DecCadetComponent implements OnInit {
  d: ChampECService;
  public CadM;
  p=1;
  constructor(d: ChampECService) {
    this.d = d;
  }

  ngOnInit() {
    let dec = this.d.getJSON();
    this.CadM = dec.DecCM;
  }

}
