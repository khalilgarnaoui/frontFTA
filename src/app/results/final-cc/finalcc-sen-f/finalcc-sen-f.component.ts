import { Component, OnInit } from '@angular/core';
import {FinalCCGafsaService} from '../../../_service/FinalCCGafsa';

@Component({
  selector: 'app-finalcc-sen-f',
  templateUrl: './finalcc-sen-f.component.html',
  styleUrls: ['./finalcc-sen-f.component.scss']
})
export class FinalccSenFComponent implements OnInit {
  f: FinalCCGafsaService;
  public Senf;
  p = 1;
  constructor(f: FinalCCGafsaService) {
    this.f = f;
  }

  ngOnInit() {
    let fin = this.f.getJSON();
    this.Senf = fin.SEF;
  }

}
