import { Component, OnInit } from '@angular/core';
import {ChampECService} from '../../../_service/ChampEC';

@Component({
  selector: 'app-champ10-juniors-f',
  templateUrl: './champ10-juniors-f.component.html',
  styleUrls: ['./champ10-juniors-f.component.scss']
})
export class Champ10JuniorsFComponent implements OnInit {
  c: ChampECService;
  public JunF;
  constructor(c: ChampECService ) {
    this.c = c;
  }

  ngOnInit() {
    const a = this.c.getJSON();
    this.JunF = a.DixMilleJUF;
  }

}
