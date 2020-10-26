import { Component, OnInit } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-reglements',
  templateUrl: './reglements.component.html',
  styleUrls: ['./reglements.component.scss']
})
export class ReglementsComponent implements OnInit {

  constructor(public sanitizer: DomSanitizer) { }

  path1 = 'http://151.80.123.213:3000/uploads/reglementGeneraux.pdf';
  path2 = 'http://151.80.123.213:3000/uploads/reglementInternes.pdf';
  ngOnInit() {
  }

}
