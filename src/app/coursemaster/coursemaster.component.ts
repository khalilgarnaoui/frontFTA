import {Component, Input, OnInit} from '@angular/core';
import {Course} from '../shared/course.model';


@Component({
  selector: 'app-coursemaster',
  templateUrl: './coursemaster.component.html',
  styleUrls: ['./coursemaster.component.scss']
})
export class CoursemasterComponent implements OnInit {
  @Input() course: Course;
  constructor() { }

  ngOnInit() {
  }

}
