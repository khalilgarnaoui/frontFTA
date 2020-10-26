import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Centre} from '../../shared/centre.model';
import {CentreDetail} from 'src/app/shared/centreDetail.model';

import {CentreDeFormationService} from '../../_service/centre-de-formation.service';
import {Subscription} from 'rxjs';

@Component({
    selector: 'app-centres-list',
    templateUrl: './centres-list.component.html',
    styleUrls: ['./centres-list.component.scss']
})
export class CentresListComponent implements OnInit, OnDestroy {
    CentreName: string;
    @Input() centre: Centre[];
    centreDetails: CentreDetail[] = [];
    private postsSub: Subscription;

    constructor(private centreService: CentreDeFormationService) {
    }

    ngOnInit() {
        this.centreService.getCentreDetails();
        this.postsSub = this.centreService.getPostUpdateListener1()
            .subscribe((centres: CentreDetail[]) => {
                this.centreDetails = centres;
            });
        this.centreDetails = this.centreService.centreDetails;

    }

    ngOnDestroy(): void {
        this.postsSub.unsubscribe();
    }

}
