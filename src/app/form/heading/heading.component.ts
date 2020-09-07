import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heading',
  templateUrl: './heading.component.html',
  styleUrls: ['./heading.component.scss']
})
export class HeadingComponent implements OnInit {
  date: number;
  constructor() { }

  ngOnInit() {
  }
  getYear() {
    this.date = (new Date()).getFullYear();
    return this.date;
  }
}
