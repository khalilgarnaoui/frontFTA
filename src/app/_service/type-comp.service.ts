import {Injectable} from '@angular/core';
import calendrier from 'src/assets/data/comp_j/calendrierGeneral.json';
import {CalendrierModel} from 'src/app/shared/shared_files/calendrier.model';

@Injectable({
    providedIn: 'root'
})
export class TypeCompService {
    public calendrierList: CalendrierModel [] = calendrier;

    constructor() {
    }

    getCalendrierByType(type): CalendrierModel [] {

        return this.calendrierList.filter(s => s.type === type);

        /*let cal = new Array();
        for (let c of this.calendrierList) {
            if (c.type === type) {
                console.log(c.type);
                cal.push(c);
            }
        }
        return cal;*/
    }
}
