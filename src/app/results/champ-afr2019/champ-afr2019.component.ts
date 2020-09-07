import {Component, OnInit} from '@angular/core';
import {ChAfrMasters2019Service} from '../../_service/ChAfrMasters2019';

@Component({
  selector: 'app-champ-afr2019',
  templateUrl: './champ-afr2019.component.html',
  styleUrls: ['./champ-afr2019.component.scss']
})
export class ChampAfr2019Component implements OnInit {
  c: ChAfrMasters2019Service;
  public j1;
  public j2;
  public j3;
  p = 1;
  public j;

  constructor(c: ChAfrMasters2019Service) {
    this.c = c;
  }

  ngOnInit() {
    let a = this.c.getJSON();
    this.j1 = a.Sept_Fev19;
    this.j2 = a.Huit_Fev19;
    this.j3 = a.Neuf_Fev19;
    this.j = this.j1.concat(this.j2.concat(this.j3));
    console.log(this.j);
  }

}
