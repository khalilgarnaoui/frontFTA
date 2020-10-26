import {Component, Input, OnInit} from '@angular/core';
import {Evenement} from 'src/app/shared/evenement.model';

@Component({
  selector: 'app-evenement-list',
  templateUrl: './evenement-list.component.html',
  styleUrls: ['./evenement-list.component.scss']
})
export class EvenementListComponent implements OnInit {
  @Input() evenment: Evenement;
  constructor() { }

  ngOnInit() {
  }

}
