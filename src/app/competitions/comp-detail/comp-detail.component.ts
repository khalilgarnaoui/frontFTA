import {Component, Input, OnInit} from '@angular/core';
import {CompModel} from '../../shared/shared_files/comp.model';

@Component({
    selector: 'app-comp-detail',
    templateUrl: './comp-detail.component.html',
    styleUrls: ['./comp-detail.component.scss']
})
export class CompDetailComponent implements OnInit {

    @Input() competition: CompModel;

    constructor() {
    }

    ngOnInit() {

    }

}
