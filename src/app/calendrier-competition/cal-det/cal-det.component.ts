import {Component, Input, OnInit} from '@angular/core';
import {CalendrierService} from '../../_service/calendrier.service';
import {ActivatedRoute} from '@angular/router';
import {CalendrierModel} from '../../shared/shared_files/calendrier.model';
import {CalenderModel} from '../../shared/shared_files/calender.model';

@Component({
    selector: 'app-cal-det',
    templateUrl: './cal-det.component.html',
    styleUrls: ['./cal-det.component.scss']
})
export class CalDetComponent implements OnInit {

    p;
    eventId;
    calendrier: CalenderModel [];
    @Input() event: CalendrierModel;

    constructor(private calendrierServ: CalendrierService, private route: ActivatedRoute) {
    }

    ngOnInit() {

        this.calendrierServ.getAllCalendrierEvents()
            .subscribe(events => {
                this.calendrier = events as CalenderModel [];
                this.calendrier.sort( (a, b) => <any>new Date(a.date_debut) - <any>new Date(b.date_debut) )
                this.p = 1;
            });
    }

}
