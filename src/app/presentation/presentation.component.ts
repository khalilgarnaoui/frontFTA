import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.scss']
})
export class PresentationComponent implements OnInit {
  president = 'Fathi Hachicha';
  siege = 'Maison des Fédérations sportives 1004 Tunis';
  affiliation = 'IAAF, CAA, UAAA';
  pageFacebook = 'https://www.facebook.com/FTATUNISIE\n';
  dateCreation = '1957';
  nbClubs = '101';
  nblicencies = '8414';
  ligueSectorielle = '06';
  constructor() {
  }

  ngOnInit() {
  }

}
