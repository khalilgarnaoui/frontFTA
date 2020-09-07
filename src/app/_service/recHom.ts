
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import json from '../../assets/data/recaordHomme.json';

//Record_Indoors
@Injectable()
export class  RecordHService {

  constructor(private http: HttpClient) {
  }

  public getJSON() {
    return json;

  }
}
