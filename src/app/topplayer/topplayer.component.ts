import { Component, OnInit } from '@angular/core';
import topPlayers from '../../assets/data/topPlayer.json';

@Component({
  selector: 'app-topplayer',
  templateUrl: './topplayer.component.html',
  styleUrls: ['./topplayer.component.scss']
})
export class TopplayerComponent implements OnInit {
  public topplayersList: {
    id: number, nom: string, prenom: string, sexe: string, ddn: string,lieu: string, club: string,
    clubetranger: string, discipline1: string, discipline2: string, MeilleurPerfo1: string, MeilleurPerfo2: string,
    classe: string, etablissement: string, encadreurtech: string, Npasseport: string,
    validité: string, telephone: string, adremail: string, pointure: string
}[] = topPlayers;
  constructor() { }

  ngOnInit() {
  }

}
