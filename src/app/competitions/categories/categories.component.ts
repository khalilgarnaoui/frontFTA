import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {DocumentModel} from '../../_service/shared_files/document.model';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
    selector: 'app-categories',
    templateUrl: './categories.component.html',
    styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
    cats: DocumentModel [];
    categorie: DocumentModel;
    catPath

    constructor(private http: HttpClient, public sanitizer: DomSanitizer) {
    }

    ngOnInit() {
        this.http.get('http://localhost:3000/api/categorie')
            .subscribe(cat => {
                this.cats = cat as DocumentModel [];
                this.categorie = this.cats[0];
                this.catPath = 'http://localhost:3000/uploads/' + this.categorie.name;
            });
    }

}
