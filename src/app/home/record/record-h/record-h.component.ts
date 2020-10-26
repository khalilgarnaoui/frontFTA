import { Component, OnInit } from '@angular/core';
import {RecordHService} from '../../../_service/recHom';

@Component({
  selector: 'app-record-h',
  templateUrl: './record-h.component.html',
  styleUrls: ['./record-h.component.scss']
})
export class RecordHComponent implements OnInit {
  rh: RecordHService;
  public SeniorMas;
  public MinimeMas;
  public JuniorMas;
  public CadetMas;
  constructor(rh: RecordHService) {
    this.rh = rh;
  }

  ngOnInit() {
    let h = this.rh.getJSON();
    this.SeniorMas = h.recordHomme;
    this.CadetMas = h.CadetMas;
    this.JuniorMas = h.Juniormas;
    this.MinimeMas = h.Minimemas;
  }
}

