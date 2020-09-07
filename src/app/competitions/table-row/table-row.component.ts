import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-table-row',
    templateUrl: './table-row.component.html',
    styleUrls: ['./table-row.component.scss']
})
export class TableRowComponent implements OnInit {

    @Input() columns: string [];
    @Input() rows: string [];
    @Input() rowsIndex: string[];

    constructor() {
    }

    ngOnInit() {
    }

}
