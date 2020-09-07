import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-ligue',
  templateUrl: './ligue.component.html',
  styleUrls: ['./ligue.component.scss']
})
export class LigueComponent implements OnInit {
  @Input() ligue;

  constructor() {
  }

  ngOnInit() {
  }

}
