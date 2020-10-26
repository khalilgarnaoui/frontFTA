import { Component, OnInit } from '@angular/core';
import {RecordInService} from '../../../_service/recIn';

@Component({
  selector: 'app-recordin',
  templateUrl: './recordin.component.html',
  styleUrls: ['./recordin.component.scss']
})
export class RecordinComponent implements OnInit {

  rs: RecordInService;
  public SeniorMasculin;
  public JuniorMasculin;
  public CadetMasculin;
  public SeniorFeminin;
  public JuniorFeminin;
  public CadetteFeminin;
  constructor(rs: RecordInService) {
    this.rs = rs;
  }

  ngOnInit() {
    let s = this.rs.getJSON();
    this.SeniorMasculin = s.SeniorMas;
    this.JuniorMasculin = s.JuniorMas;
    this.CadetMasculin = s.CadetMas;
    this.SeniorFeminin = s.SeniorFem;
    this.JuniorFeminin = s.JuniorFem;
    this.CadetteFeminin = s.CadetteFem;
    console.log(this.SeniorMasculin);
  }

}

