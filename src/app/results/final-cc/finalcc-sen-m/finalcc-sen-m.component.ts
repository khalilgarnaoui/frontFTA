import { Component, OnInit } from '@angular/core';
import {FinalCCGafsaService} from '../../../_service/FinalCCGafsa';

@Component({
  selector: 'app-finalcc-sen-m',
  templateUrl: './finalcc-sen-m.component.html',
  styleUrls: ['./finalcc-sen-m.component.scss']
})
export class FinalccSenMComponent implements OnInit {
  f: FinalCCGafsaService;
  public Senm;
  p=1;
  constructor(f: FinalCCGafsaService) {
    this.f = f;
  }
  ngOnInit() {
    let fin = this.f.getJSON();
    this.Senm = fin.SEM;

  }

}
