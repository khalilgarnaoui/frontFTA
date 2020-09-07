import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import json from '../../assets/data/statistique.json';

//Record_Indoors
@Injectable()
export class  StaticService {

  constructor(private http: HttpClient) {
  }

  public getJSON() {
    return json;

  }
}
