import { Component, OnInit } from '@angular/core';
import {ChampECService} from '../../../_service/ChampEC';

@Component({
  selector: 'app-quadri-min-f',
  templateUrl: './quadri-min-f.component.html',
  styleUrls: ['./quadri-min-f.component.scss']
})
export class QuadriMinFComponent implements OnInit {
  e: ChampECService;
  public Quadf;
  constructor(e: ChampECService) {
    this.e = e;
  }

  ngOnInit() {
    let q = this.e.getJSON();
    this.Quadf = q.QuadriMiF;
  }

}
