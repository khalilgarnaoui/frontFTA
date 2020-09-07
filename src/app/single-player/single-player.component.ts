import {Component, OnInit} from '@angular/core';
import {PlayersComponent} from '../players/players.component';
import {ActivatedRoute} from '@angular/router';
import {Player} from '../shared/player.model';
import {PlayerService} from '../_service/player.service';
import {PerformanceModel} from '../shared/shared_files/performance.model';
import {PalmaresModel} from '../shared/shared_files/palmares.model';

@Component({
    providers: [PlayersComponent],
    selector: 'app-single-player',
    templateUrl: './single-player.component.html',
    styleUrls: ['./single-player.component.scss']
})
export class SinglePlayerComponent implements OnInit {
    p: Player = new Player();
    playerId;
    listAthletes: Player[];
    listPerfo: PerformanceModel [] = [];
    listPerfoPlayer: PerformanceModel [] = [];
    listPalmaresPlayer: PalmaresModel [] = [];
    listPalmares: PalmaresModel [] = [];

    constructor(private playerService: PlayerService, private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.route.params
            .subscribe((data) => {
                this.playerId = data.id;
                if (this.playerId) {
                    this.playerService.getAllAthletes()
                        .subscribe(athletes => {
                            this.listAthletes = athletes as Player [];
                            this.p = this.listAthletes.find(element => element._id === this.playerId);
                            this.playerService.getAllPerformancesAllAthletes()
                                .subscribe(perfo => {
                                    this.listPerfo = perfo as PerformanceModel [];
                                    this.listPerfoPlayer = this.listPerfo.filter(per => per.athlete === this.playerId);
                                });
                            this.playerService.getAllPalmaresAllAthletes()
                                .subscribe(palm => {
                                    this.listPalmares = palm as PalmaresModel [];
                                    this.listPalmaresPlayer = this.listPalmares.filter( pal => pal.athlete === this.playerId);
                                });

                        });

                }

            });
    }

}
