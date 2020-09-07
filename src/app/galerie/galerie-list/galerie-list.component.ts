import {Component, Input, OnInit} from '@angular/core';
import {GalerieList} from '../../shared/galerieList.model';

@Component({
    selector: 'app-galerie-list',
    templateUrl: './galerie-list.component.html',
    styleUrls: ['./galerie-list.component.scss']
})
export class GalerieListComponent implements OnInit {
    @Input() galerie: GalerieList;
    @Input() i: number;


    constructor() {
    }

    ngOnInit() {
    }

}
