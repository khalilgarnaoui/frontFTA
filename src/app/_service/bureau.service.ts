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
      .get<any>('http://127.0.0.1:3000/api/worker');
  }
}
