import { Component, OnInit } from '@angular/core';
import {RecordFemService} from '../../../_service/recFem';
@Component({
  selector: 'app-recordfem',
  templateUrl: './recordfem.component.html',
  styleUrls: ['./recordfem.component.scss']
})
export class RecordfemComponent implements OnInit {
  rf: RecordFemService;
  public SeniorFeminine;
  public MinimeFeminine;
  public JuniorFeminine;
  public CadetteFeminine;
  constructor(rf: RecordFemService) {
    this.rf = rf;
  }

  ngOnInit() {
    let f = this.rf.getJSON();
    this.SeniorFeminine = f.SeniorFem;
    this.CadetteFeminine = f.CadetteFem;
    this.JuniorFeminine = f.JuniorFem;
    this.MinimeFeminine = f.MinimeFem;
  }

}
