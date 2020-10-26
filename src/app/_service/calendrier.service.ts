import {Injectable} from '@angular/core';
import calendrier from 'src/assets/data/comp_j/calendrierGeneral.json';
import {CalendrierModel} from '../shared/shared_files/calendrier.model';
import {HttpClient} from '@angular/common/http';
import {CalenderModel} from '../shared/shared_files/calender.model';

@Injectable({
    providedIn: 'root'
})
export class CalendrierService {
    public calendrierList: CalendrierModel [] = calendrier;

    public calenderList: CalenderModel [];

    constructor(private http: HttpClient) {
    }

    getAllCalendrierEvents() {
        return this.http.get('http://151.80.123.213:3000/api/session_comptition');
    }

}
