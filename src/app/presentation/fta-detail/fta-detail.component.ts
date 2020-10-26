import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fta-detail',
  templateUrl: './fta-detail.component.html',
  styleUrls: ['./fta-detail.component.scss']
})
export class FtaDetailComponent implements OnInit {
  pageFacebook = 'https://www.facebook.com/FTATUNISIE';
  caracteristiques = {
    'Président :' : 'Fathi Hachicha',
    'Date de création de la FTA : ' : '1957',
    'Nombre de Clubs : ' : '101',
    'Nombre de Licenciés : ' : '8414',
    'Ligues Sectorielles : ' : '06',
};
  constructor() { }

  ngOnInit() {
  }

}
