import {Component, OnDestroy, OnInit} from '@angular/core';
import {Centre} from '../shared/centre.model';
import {CentreDeFormationService} from '../_service/centre-de-formation.service';
import {Subscription} from 'rxjs';
import {HttpClient} from '@angular/common/http';


@Component({
    selector: 'app-centre-de-formation',
    templateUrl: './centre-de-formation.component.html',
    styleUrls: ['./centre-de-formation.component.scss'],
})
export class CentreDeFormationComponent implements OnInit, OnDestroy {

    centres: Centre[] = [];
    private postsSub: Subscription;


    constructor(private centreService: CentreDeFormationService, private http: HttpClient) {
    }

    ngOnInit() {
        this.centreService.getCentre();
        this.postsSub = this.centreService.getPostUpdateListener()
            .subscribe((centres: Centre[]) => {
                this.centres = centres;
            });
        this.centres = this.centreService.centres;

    }

    ngOnDestroy(): void {
        this.postsSub.unsubscribe();
    }


}

