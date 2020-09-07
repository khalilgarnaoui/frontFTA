import {Component, OnInit} from '@angular/core';
import {DocumentModel} from '../_service/shared_files/document.model';
import {HttpClient} from '@angular/common/http';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
    selector: 'app-reglement',
    templateUrl: './reglement.component.html',
    styleUrls: ['./reglement.component.scss']
})
export class ReglementComponent implements OnInit {

    reglement1: DocumentModel [];
    path1;
    path2;
    reglement2: DocumentModel [];

    constructor(private http: HttpClient, public sanitizer: DomSanitizer) {
    }

    ngOnInit() {
        this.http.get('http://localhost:3000/api/reglements')
            .subscribe(cat => {
                this.reglement1 = cat as DocumentModel [];
                this.path1 = 'http://localhost:3000/uploads/' + this.reglement1[0].name;
            });
        this.http.get('http://localhost:3000/api/reglements_club')
            .subscribe(cat => {
                this.reglement2 = cat as DocumentModel [];
                this.path2 = 'http://localhost:3000/uploads/' + this.reglement2[0].name;
            });
    }

}
