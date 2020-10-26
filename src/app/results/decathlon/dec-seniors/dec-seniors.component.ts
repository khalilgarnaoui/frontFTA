import { Component, OnInit } from '@angular/core';
import {ChampECService} from "../../../_service/ChampEC";

@Component({
  selector: 'app-dec-seniors',
  templateUrl: './dec-seniors.component.html',
  styleUrls: ['./dec-seniors.component.scss']
})
export class DecSeniorsComponent implements OnInit {
  d: ChampECService;
  public SenM;
  constructor(d: ChampECService) {
    this.d = d;
  }

  ngOnInit() {
    let dec = this.d.getJSON();
    this.SenM = dec.DecSM;

  }

}
