import {Component, OnInit} from '@angular/core';
import {ChampECService} from '../../../_service/ChampEC';

@Component({
  selector: 'app-champ10-seniors-f',
  templateUrl: './champ10-seniors-f.component.html',
  styleUrls: ['./champ10-seniors-f.component.scss']
})
export class Champ10SeniorsFComponent implements OnInit {
  c: ChampECService;
  public SenF;

  constructor(c: ChampECService) {
    this.c = c;
  }

  ngOnInit() {
    const a = this.c.getJSON();
    this.SenF = a.DixMillemSEF;

  }

}
