import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class CompetitionService {


    constructor(private http: HttpClient) {
    }

    getAllComps() {
        return this.http.get('http://151.80.123.213:3000/api/competition');

    }
}
