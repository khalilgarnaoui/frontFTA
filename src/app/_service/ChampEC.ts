import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import json from '../../assets/data/ChampEC.json';

@Injectable()
export class  ChampECService {

  constructor(private http: HttpClient) {
  }

  public getJSON() {
    return json;

  }
}
