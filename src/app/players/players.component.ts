import {Component, OnInit} from '@angular/core';
import {Player} from 'src/app/shared/player.model';
import {ActivatedRoute} from '@angular/router';
import {PlayerService} from '../_service/player.service';

@Component({
    selector: 'app-players',
    templateUrl: './players.component.html',
    styleUrls: ['./players.component.scss']
})
export class PlayersComponent implements OnInit {
    players;
    pages: object[];
    num: number;
    liste: Player[];
    next: string;
    previous: string;
    word = '';
    listee: Player[];
    p;


    constructor(private route: ActivatedRoute, private playerService: PlayerService) {
    }

    ngOnInit() {
        this.p = 1;
        let num;
        this.playerService.getAllAthletes()
            .subscribe(athlete => {
                    this.players = athlete;
                    this.route.params.subscribe(
                        value => {
                            window.scroll(0, 0);
                            num = value.num || 1;

                            this.num = +num;
                            this.Clicked();
                        });
                }
            );


    }

    Clicked() {
        if (this.word == '') {
            this.liste = this.players.slice((this.num - 1) * 12, this.num * 12);
            this.pages = [];
            for (let i = 0; i < this.players.length / 12; i++) {
                this.pages.push({nb: i + 1, active: this.num == i + 1 ? 'active' : ''});
            }
            if (this.num == 1) {
                this.previous = 'disabled';
            } else {
                this.previous = '';
            }
            if (this.num == this.pages.length) {
                this.next = 'disabled';
            } else {
                this.next = '';
            }
        } else {
            this.listee = this.players.filter((e) => (e.prenom + ' ' + e.nom).match(new RegExp(this.word, 'i')));
            this.liste = this.listee.slice((this.num - 1) * 12, this.num * 12);
            this.pages = [];
            for (let i = 0; i < this.listee.length / 12; i++) {
                this.pages.push({nb: i + 1, active: this.num == i + 1 ? 'active' : ''});
            }
            if (this.num == 1) {
                this.previous = 'disabled';
            } else {
                this.previous = '';
            }
            if (this.num == this.pages.length) {
                this.next = 'disabled';
            } else {
                this.next = '';
            }
        }
    }
}
