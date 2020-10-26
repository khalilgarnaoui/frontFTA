import {Component, OnInit} from '@angular/core';
import {CalendrierService} from '../../_service/calendrier.service';
import {CalendrierModel} from '../../shared/shared_files/calendrier.model';
import {NgxPaginationModule} from 'ngx-pagination';

@Component({
  selector: 'app-list-cal',
  templateUrl: './list-cal.component.html',
  styleUrls: ['./list-cal.component.scss']
})
export class ListCalComponent implements OnInit {

  calendrier;
  // calendrier: CalendrierModel[];
  p = 1;

  constructor(private calendrierServ: CalendrierService) {
  }

  ngOnInit() {
    this.calendrier = this.calendrierServ.getAllCalendrierEvents();
  }

}
