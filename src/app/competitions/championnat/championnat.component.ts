import { Component, OnInit } from '@angular/core';
import {CalendrierService} from '../../_Service/calendrier.service';
import {CalendrierModel} from '../../shared/shared_files/calendrier.model';
import calend from '../../../assets/data/comp_j/calendrierGeneral.json';
import {DocumentModel} from '../../_service/shared_files/document.model';
import {HttpClient} from '@angular/common/http';
import {ReglementChampionnatModel} from '../../_service/shared_files/reglementChampionnat.model';
@Component({
  selector: 'app-championnat',
  templateUrl: './championnat.component.html',
  styleUrls: ['./championnat.component.scss']
})
export class ChampionnatComponent implements OnInit {


  champs: ReglementChampionnatModel [];

  constructor(private calendrierServ: CalendrierService, private http: HttpClient) {
  }

  ngOnInit() {
    this.http.get('http://localhost:3000/api/reglements_championnat')
        .subscribe(cat => {
          this.champs = cat as ReglementChampionnatModel [];
        });
  }

}
