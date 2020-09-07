import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import json from '../../assets/data/ChAfrMasters2019.json';

@Injectable()
export class  ChAfrMasters2019Service {

  constructor(private http: HttpClient) {
  }

  public getJSON() {
    return json;

  }
}
