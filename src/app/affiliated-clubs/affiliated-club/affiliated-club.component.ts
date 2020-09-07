import {Component, Input, OnInit} from '@angular/core';
import {AffiliatedClub} from '../../_service/shared_files/aff_club';

@Component({
  selector: 'app-affiliated-club',
  templateUrl: './affiliated-club.component.html',
  styleUrls: ['./affiliated-club.component.scss']
})
export class AffiliatedClubComponent implements OnInit {
  @Input() club: AffiliatedClub;

  constructor() {
  }

  ngOnInit() {
  }

}
