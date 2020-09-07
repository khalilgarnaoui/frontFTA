import {Component, Input, OnInit} from '@angular/core';
import {CompetitionService} from '../../_Service/competition.service';
import {CompModel} from '../../shared/shared_files/comp.model';

@Component({
    selector: 'app-list-comp',
    templateUrl: './list-comp.component.html',
    styleUrls: ['./list-comp.component.scss']
})
export class ListCompComponent implements OnInit {
    @Input() listComp: CompModel [];

    constructor(private compService: CompetitionService) {
    }

    ngOnInit() {
        this.compService.getAllComps()
            .subscribe(comps => {
                this.listComp = comps as CompModel [];
            });

        /*this.competitions = this.compService.getAllComps();
        console.log(this.competitions);*/


        /*this.route.params
            .subscribe((data) => {
                console.log(data);
            });*/

    }

}
