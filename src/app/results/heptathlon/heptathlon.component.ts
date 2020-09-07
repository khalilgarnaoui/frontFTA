import {Component, OnInit} from '@angular/core';
import {ChampECService} from '../../_service/ChampEC';

@Component({
  selector: 'app-heptathlon',
  templateUrl: './heptathlon.component.html',
  styleUrls: ['./heptathlon.component.scss']
})
export class HeptathlonComponent implements OnInit {
  h: ChampECService;
  public Hep;
  p = 1;
  constructor(h: ChampECService) {
    this.h = h;
  }

  ngOnInit() {
    let he = this.h.getJSON();
    this.Hep = he.HepthF;
  }

}
