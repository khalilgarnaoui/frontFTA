import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BureauService {
  constructor(private http: HttpClient) {
  }

  getBureau(): Observable<any> {
    return this.http
      .get<any>('http://151.80.123.213:3000/api/worker');
  }
}
