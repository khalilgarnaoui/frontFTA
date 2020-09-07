import { Component, OnInit } from '@angular/core';
import {FinalCCGafsaService} from '../../../_service/FinalCCGafsa';

@Component({
  selector: 'app-finalcc-cdt-m',
  templateUrl: './finalcc-cdt-m.component.html',
  styleUrls: ['./finalcc-cdt-m.component.scss']
})
export class FinalccCdtMComponent implements OnInit {
  f: FinalCCGafsaService;
  public Cam;
  p = 1;
  constructor(f: FinalCCGafsaService) {
    this.f = f;
  }
  ngOnInit() {
    let fin = this.f.getJSON();
    this.Cam = fin.CAM;
  }

}
