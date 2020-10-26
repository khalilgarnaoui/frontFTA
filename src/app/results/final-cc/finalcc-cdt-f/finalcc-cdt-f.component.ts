import { Component, OnInit } from '@angular/core';
import {FinalCCGafsaService} from '../../../_service/FinalCCGafsa';

@Component({
  selector: 'app-finalcc-cdt-f',
  templateUrl: './finalcc-cdt-f.component.html',
  styleUrls: ['./finalcc-cdt-f.component.scss']
})
export class FinalccCdtFComponent implements OnInit {
  f: FinalCCGafsaService;
  public Caf;
  p = 1;
  constructor(f: FinalCCGafsaService) {
    this.f = f;
  }
  ngOnInit() {
    let fin = this.f.getJSON();
    this.Caf = fin.CAF;
  }

}
