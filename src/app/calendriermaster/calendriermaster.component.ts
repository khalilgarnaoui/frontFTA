import {Component, Input, OnInit} from '@angular/core';
import {Course} from '../shared/course.model';

@Component({
  selector: 'app-calendriermaster',
  templateUrl: './calendriermaster.component.html',
  styleUrls: ['./calendriermaster.component.scss']
})
export class CalendriermasterComponent implements OnInit {
  @Input() course: Course;
  constructor() { }

  ngOnInit() {
  }

}
