import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-commission-detail',
  templateUrl: './commission-detail.component.html',
  styleUrls: ['./commission-detail.component.scss']
})
export class CommissionDetailComponent implements OnInit {
  @Input() commission ;
  constructor() { }

  ngOnInit() {
  }

}
