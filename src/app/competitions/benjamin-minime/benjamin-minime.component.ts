import {Component, OnInit} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {HttpClient} from '@angular/common/http';
import {DocumentModel} from '../../_service/shared_files/document.model';

@Component({
    selector: 'app-benjamin-minime',
    templateUrl: './benjamin-minime.component.html',
    styleUrls: ['./benjamin-minime.component.scss']
})
export class BenjaminMinimeComponent implements OnInit {

    benjpath;
    benjs: DocumentModel [];
    constructor(public sanitizer: DomSanitizer, private http: HttpClient) {
    }

    ngOnInit() {
        this.http.get('http://151.80.123.213:3000/api/benjamin')
            .subscribe( ben => {
                this.benjs = ben as DocumentModel [];
                this.benjpath = 'http://151.80.123.213:3000/uploads/' + this.benjs[0].name;
            });
    }

}
