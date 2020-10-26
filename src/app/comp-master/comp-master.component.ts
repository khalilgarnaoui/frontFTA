import { Component, OnInit } from '@angular/core';
import * as data from 'src/assets/data/coursemaster.json';
import * as donnee from 'src/assets/data/calendriermaster.json';
@Component({
  selector: 'app-comp-master',
  templateUrl: './comp-master.component.html',
  styleUrls: ['./comp-master.component.scss']
})

export class CompMasterComponent implements OnInit {
  courses: any = (data as any).default;
  calendrier: any = (donnee as any).default;
  constructor() { }

  ngOnInit() {
    // $('.counter').counterUp({
    //   delay: 10,
    //   time: 2000
    // });
    // $('.counter').addClass('animated fadeInDownBig');
    // $('h3').addClass('animated fadeIn');
  }

}
