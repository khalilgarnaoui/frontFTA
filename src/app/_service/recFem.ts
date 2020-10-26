
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import json from '../../assets/data/recorddame.json';

//Record_Indoors
@Injectable()
export class  RecordFemService {

  constructor(private http: HttpClient) {
  }

  public getJSON() {
    return json;

  }
}
