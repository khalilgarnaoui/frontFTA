import { Component, OnInit } from '@angular/core';
import {FinalCCGafsaService} from '../../../_service/FinalCCGafsa';

@Component({
  selector: 'app-finalcc-min-f',
  templateUrl: './finalcc-min-f.component.html',
  styleUrls: ['./finalcc-min-f.component.scss']
})
export class FinalccMinFComponent implements OnInit {
  f: FinalCCGafsaService;
  public Minf;
  p=1;
  constructor(f: FinalCCGafsaService) {
    this.f = f;
  }

  ngOnInit() {
    let fin = this.f.getJSON();

    this.Minf = fin.MinF;

  }

}
