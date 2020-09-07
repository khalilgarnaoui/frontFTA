import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-nb',
  templateUrl: './nb.component.html',
  styleUrls: ['./nb.component.scss']
})
export class NbComponent implements OnInit {
  @Input() montant: number;
  @Input() ext: boolean;
  constructor() { }

  ngOnInit() {
  }

}
