import {Component, Input, OnInit} from '@angular/core';
import {PlayersComponent} from '../players/players.component';
import {Player} from '../shared/player.model';

@Component({
  selector: 'app-itemplayer',
  templateUrl: './itemplayer.component.html',
  styleUrls: ['./itemplayer.component.scss']
})
export class ItemplayerComponent implements OnInit {
  @Input() player: Player;
  constructor( ) {}
  ngOnInit() {
  }

}
