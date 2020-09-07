import {Component, Input, OnInit} from '@angular/core';
import {Worker} from '../../_service/shared_files/worker.model';


@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.scss']
})
export class MemberComponent implements OnInit {

  @Input() worker: Worker;


  constructor() {
  }

  ngOnInit() {
  }

}
