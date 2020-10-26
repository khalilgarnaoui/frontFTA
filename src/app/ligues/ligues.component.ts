import {Component, OnInit} from '@angular/core';
import {Ligue} from '../_service/shared_files/ligue.model';

import {LigueService} from '../_service/ligue.service';


@Component({
    selector: 'app-ligues',
    templateUrl: './ligues.component.html',
    styleUrls: ['./ligues.component.scss']
})
export class LiguesComponent implements OnInit {
    ligues = [];

    constructor(public ligueService: LigueService) {
    }

    ngOnInit() {
        this.ligueService.getLigues().subscribe(dataa => {
            dataa = dataa.map(x => {
                return {
                    id: x._id,
                    ...x
                };
            });
            for (const data of dataa) {
                this.ligues.push(new Ligue(data.id, data.name, data.president,
                    data.email, data.mobile, data.fax, data.image));
            }
            window.scroll(0, 0);
        });
    }
}
