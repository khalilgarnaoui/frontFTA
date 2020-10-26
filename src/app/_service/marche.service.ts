import {Injectable} from '@angular/core';
import distance from 'src/assets/data/comp_j/distanceMarche.json';
import {DistanceModel} from '../shared/shared_files/distance.model';

@Injectable({
    providedIn: 'root'
})
export class MarcheService {

    public distance: DistanceModel [] = distance;


    constructor() {
    }

    getDistanceByMois(mois): DistanceModel [] {
        return this.distance.filter(s => s.mois === mois);
    }
}
