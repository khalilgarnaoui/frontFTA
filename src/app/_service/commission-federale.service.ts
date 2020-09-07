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
      .get<any>('http://127.0.0.1:3000/api/membre_commission');
  }

  getmembre(id) {
    return this.http
      .get<{ name, email, commission, image }>('http://127.0.0.1:3000/api/membre_commission' + id);
  }
}
