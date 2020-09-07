import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-presentation-detail',
  templateUrl: './presentation-detail.component.html',
  styleUrls: ['./presentation-detail.component.scss']
})
export class PresentationDetailComponent implements OnInit {
  image_logo_fta = 'FTA.png' ;
  image_ligues = 'ligues.png';
  constructor() {
  }

  ngOnInit() {
  }

}
