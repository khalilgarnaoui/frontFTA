
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import json from '../../assets/data/formation19-20.json';

//Record_Indoors
@Injectable()
export class  Formation20Service {

  constructor(private http: HttpClient) {
  }

  public getJSON() {
    return this.http.get('http://151.80.123.213:3000/api/formation');
  }
}
