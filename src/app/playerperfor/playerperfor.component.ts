import {Component, Input, OnInit} from '@angular/core';
import {PerformanceModel} from '../shared/shared_files/performance.model';


@Component({
    selector: 'app-playerperfor',
    templateUrl: './playerperfor.component.html',
    styleUrls: ['./playerperfor.component.scss']
})
export class PlayerperforComponent implements OnInit {

    @Input() p: PerformanceModel;
    page = 1;

    constructor() {
    }

    ngOnInit() {
    }

}
