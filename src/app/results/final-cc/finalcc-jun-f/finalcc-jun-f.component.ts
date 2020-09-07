import { Component, OnInit } from '@angular/core';
import {FinalCCGafsaService} from '../../../_service/FinalCCGafsa';

@Component({
  selector: 'app-finalcc-jun-f',
  templateUrl: './finalcc-jun-f.component.html',
  styleUrls: ['./finalcc-jun-f.component.scss']
})
export class FinalccJunFComponent implements OnInit {
  f: FinalCCGafsaService;
  public Junf;
  p=1;
  constructor(f: FinalCCGafsaService) {
    this.f = f;
  }
  ngOnInit() {
    let fin = this.f.getJSON();
    this.Junf = fin.JUF;

  }

}
