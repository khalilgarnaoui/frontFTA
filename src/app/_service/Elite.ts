import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import json from '../../assets/data/Elite.json';

@Injectable()
export class  EliteService {

  constructor(private http: HttpClient) {
  }

  public getJSON() {
    return json;

  }
}
