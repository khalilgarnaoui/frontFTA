import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClubsService {
  clubs: [];

  constructor(private http: HttpClient) {
  }

  getClubs(): any {
    return this.http
      .get<[]>('http://151.80.123.213:3000/api/club');
  }

  getClub(id: string) {

    return this.http.get<{
      id,
      name,
      president_secretaireGenerale,
      mobilePresident_secretaireGenerale,
      mobileClub,
      faxClub,
      adresse,
      gouvernorat,
      gouvernoratFR,
      affiliated,
      image
    }>('http://151.80.123.213:3000/api/club/' + id);
  }
}

