import {Component, OnInit} from '@angular/core';
// @ts-ignore
import * as data from 'src/assets/data/jsons/affiliated-clubs.json';
import {AffiliatedClub} from '../_service/shared_files/aff_club';

@Component({
  selector: 'app-affiliated-clubs',
  templateUrl: './affiliated-clubs.component.html',
  styleUrls: ['./affiliated-clubs.component.scss']
})
export class AffiliatedClubsComponent implements OnInit {
  datas: any = (data as any).default;
  clubs = [];

  constructor() {
    this.getInfos();
    console.log(this.clubs);
  }

  ngOnInit() {
  }

  getInfos() {
    // tslint:disable-next-line:no-shadowed-variable
    for (const data of this.datas) {
      this.clubs.push(new AffiliatedClub(data.id, data.name, data.adresse, data.codeLigue, data.telFax, data.sitClub, data.image));
    }
  }
}
