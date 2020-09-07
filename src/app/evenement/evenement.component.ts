import {Component, OnInit} from '@angular/core';
import {Evenement} from '../shared/evenement.model';
import {EvenementService} from '../_service/evenement.service';
import {Subscription} from 'rxjs';

@Component({
    selector: 'app-evenement',
    templateUrl: './evenement.component.html',
    styleUrls: ['./evenement.component.scss']
})
export class EvenementComponent implements OnInit {

    evenements: Evenement[] = [];
    private eventsSub: Subscription;


    constructor(private evenmentService: EvenementService) {

    }

    ngOnInit() {
        this.evenmentService.getEvent();
        this.eventsSub = this.evenmentService.getPostUpdateListener()
            .subscribe((events: Evenement[]) => {
                this.evenements = events;
            });
        this.evenements = this.evenmentService.evenements;
        // .subscribe(data => {
        //   console.log(data);
        //   this.evenements = data;
        // });
    }


}
