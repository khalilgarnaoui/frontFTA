import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CompetitionService} from '../../_service/competition.service';
import {CompModel} from '../../shared/shared_files/comp.model';
import {CalendrierService} from '../../_service/calendrier.service';
import {CalenderModel} from '../../shared/shared_files/calender.model';

@Component({
    selector: 'app-competition-detail',
    templateUrl: './competition-detail.component.html',
    styleUrls: ['./competition-detail.component.scss']
})
export class CompetitionDetailComponent implements OnInit {

    compId;
    listEvents: CalenderModel [];
    compEvents: CalenderModel [];
    comp: CompModel;
    listComps: CompModel [];
    description: any;
    cols: any [] = [];
    p;

    constructor(private route: ActivatedRoute, private compService: CompetitionService, private calendrierService: CalendrierService) {
    }

    ngOnInit() {
        this.route.params
            .subscribe((data) => {
                this.compId = data.id;
                if (this.compId) {
                    this.compService.getAllComps()
                        .subscribe(comps => {
                            this.listComps = comps as CompModel [];
                            this.comp = this.listComps.find(element => element._id === this.compId);
                            this.description = this.listComps.find(element => element._id === this.compId);
                            for (let i of this.description.description) {
                                const array = Object.getOwnPropertyNames(i.table[0]);
                                this.cols.push(array);
                            }

                        });
                    this.calendrierService.getAllCalendrierEvents()
                        .subscribe(events => {
                            console.log('events');
                            this.listEvents = events as CalenderModel [];
                            console.log(this.listEvents);
                            this.compEvents = this.listEvents.filter( e => e.id_comp === this.compId) ;
                            this.p = 1;
                        });
                }

            });
    }

}
