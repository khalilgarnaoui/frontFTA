import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {DomSanitizer} from '@angular/platform-browser';
import {DocumentModel} from '../../_service/shared_files/document.model';

@Component({
  selector: 'app-minimas-athlete-cible',
  templateUrl: './minimas-athlete-cible.component.html',
  styleUrls: ['./minimas-athlete-cible.component.scss']
})
export class MinimasAthleteCibleComponent implements OnInit {
  mins: DocumentModel [];
  minPath

  constructor(private http: HttpClient, public sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.http.get('http://151.80.123.213:3000/api/minimas')
        .subscribe(cat => {
          this.mins = cat as DocumentModel [];
          this.minPath = 'http://151.80.123.213:3000/uploads/' + this.mins[0].name;
          console.log(this.minPath);
        });
  }

}
