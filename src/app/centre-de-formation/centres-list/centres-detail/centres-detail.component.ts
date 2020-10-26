import {Component, Input, OnInit} from '@angular/core';
import {CentreDetail} from '../../../shared/centreDetail.model';

@Component({
  selector: 'app-centres-detail',
  templateUrl: './centres-detail.component.html',
  styleUrls: ['./centres-detail.component.scss']
})
export class CentresDetailComponent implements OnInit {

  @Input() CentreName: string;
  @Input() centreDetail: CentreDetail[];
  constructor() { }

  ngOnInit() {
  }

}
