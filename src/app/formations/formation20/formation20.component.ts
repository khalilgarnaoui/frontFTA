import {Component, OnInit} from '@angular/core';
import {Formation20Service} from '../../_service/form20';
import {FormationModel} from '../../shared/shared_files/formation.model';
import {DatePipe} from '@angular/common';

@Component({
    selector: 'app-formation20',
    templateUrl: './formation20.component.html',
    styleUrls: ['./formation20.component.scss'],
    providers: [DatePipe]
})
export class Formation20Component implements OnInit {
    formation2020: FormationModel [];
    formation: FormationModel [];
    page = 1;

    constructor(private fm: Formation20Service, public datepipe: DatePipe) {
    }

    ngOnInit() {
        this.fm.getJSON()
            .subscribe(form => {
                const date = new Date();
                this.formation = form as FormationModel [];
                this.formation2020 = this.formation.filter(e =>
                    this.datepipe.transform(e.date_formation, 'yyyy/MM/dd') > this.datepipe.transform(date, 'yyyy/MM/dd'));
            });
    }

}
