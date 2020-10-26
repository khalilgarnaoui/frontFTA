import { Component, OnInit } from '@angular/core';
import {ChampECService} from '../../../_service/ChampEC';

@Component({
  selector: 'app-champ10-juniors-m',
  templateUrl: './champ10-juniors-m.component.html',
  styleUrls: ['./champ10-juniors-m.component.scss']
})
export class Champ10JuniorsMComponent implements OnInit {
  c: ChampECService;
  public JunM;
  constructor(c: ChampECService ) {
    this.c = c;
  }

  ngOnInit() {
    let a = this.c.getJSON();
    this.JunM = a.DixMillemJUM;
  }

}
