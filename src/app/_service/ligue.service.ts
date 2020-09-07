import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LigueService {
  constructor(private http: HttpClient) {
  }
  getLigues(): any {
    return this.http
      .get<any>('http://127.0.0.1:3000/api/ligue');
  }

  getLigue(id: string) {

    return this.http.get<any>('http://127.0.0.1:3000/api/ligue/' + id);
  }
}
