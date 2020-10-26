import { Component, OnInit } from '@angular/core';
import {FinalCCGafsaService} from '../../../_service/FinalCCGafsa';

@Component({
  selector: 'app-finalcc-jun-m',
  templateUrl: './finalcc-jun-m.component.html',
  styleUrls: ['./finalcc-jun-m.component.scss']
})
export class FinalccJunMComponent implements OnInit {
  f: FinalCCGafsaService;
  public Junm;
  p=1;
  constructor(f: FinalCCGafsaService) {
    this.f = f;
  }
  ngOnInit() {
    let fin = this.f.getJSON();
    this.Junm = fin.JUM;

  }

}
