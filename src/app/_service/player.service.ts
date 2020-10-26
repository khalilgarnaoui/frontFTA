import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CompModel} from '../shared/shared_files/comp.model';
import {PerformanceModel} from '../shared/shared_files/performance.model';
import {element} from 'protractor';

@Injectable({
    providedIn: 'root'
})
export class PlayerService {

    listPerfo;
    listPerfoPlayer;
    constructor(private http: HttpClient) {

    }

    getAllAthletes() {
        return this.http.get('http://151.80.123.213:3000/api/athlete');
    }

    getAllPerformancesAllAthletes() {
        return this.http.get('http://151.80.123.213:3000/api/performance');
    }

    getAllPalmaresAllAthletes() {
        return this.http.get('http://151.80.123.213:3000/api/palmares');
    }

    // getAllPerformancesAthlete(athlete) {
    //     this.getAllPerformancesAllAthletes()
    //         .subscribe( perfo => {
    //             this.listPerfo = perfo as PerformanceModel [];
    //             this.listPerfoPlayer = this.listPerfo.filter( p => { p.athlete === athlete; } );
    //             return this.listPerfoPlayer;
    //         });
    // }
}
