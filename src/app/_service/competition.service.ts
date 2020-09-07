import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class CompetitionService {


    constructor(private http: HttpClient) {
    }

    getAllComps() {
        return this.http.get('http://localhost:3000/api/competition');

    }
}
