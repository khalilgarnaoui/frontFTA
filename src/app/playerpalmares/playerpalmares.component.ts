import {Component, Input, OnInit} from '@angular/core';
import {PalmaresModel} from '../shared/shared_files/palmares.model';


@Component({
    selector: 'app-playerpalmares',
    templateUrl: './playerpalmares.component.html',
    styleUrls: ['./playerpalmares.component.scss']
})
export class PlayerpalmaresComponent implements OnInit {

    @Input() p: PalmaresModel;
    page = 1;

    constructor() {
    }

    ngOnInit() {
    }

}
