import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommissionFederaleService {

  constructor(private http: HttpClient) {
  }

  getCommission(): Observable<any> {
    return this.http
      .get<any>('http://151.80.123.213:3000/api/membre_commission');
  }

  getmembre(id) {
    return this.http
      .get<{ name, email, commission, image }>('http://151.80.123.213:3000/api/membre_commission' + id);
  }
}
