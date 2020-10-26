import { Component, OnInit } from '@angular/core';
import {ChampECService} from '../../../_service/ChampEC';

@Component({
  selector: 'app-quadri-min-m',
  templateUrl: './quadri-min-m.component.html',
  styleUrls: ['./quadri-min-m.component.scss']
})
export class QuadriMinMComponent implements OnInit {
  e: ChampECService;
  public Quadm;
  constructor(e: ChampECService) {
    this.e = e;
  }

  ngOnInit() {
    const q = this.e.getJSON();
    this.Quadm = q.QuadriMiM;
  }

}
