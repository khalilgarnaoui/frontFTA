import { Component, OnInit } from '@angular/core';
import {FinalCCGafsaService} from '../../../_service/FinalCCGafsa';

@Component({
  selector: 'app-finalcc-min-m',
  templateUrl: './finalcc-min-m.component.html',
  styleUrls: ['./finalcc-min-m.component.scss']
})
export class FinalccMinMComponent implements OnInit {
  f: FinalCCGafsaService;
  public Minm;
  p=1;
  constructor(f: FinalCCGafsaService) {
    this.f = f;
  }

  ngOnInit() {
    let fin = this.f.getJSON();
    this.Minm = fin.MinM;
  }

}
