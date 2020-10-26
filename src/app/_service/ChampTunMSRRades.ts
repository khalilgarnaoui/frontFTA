import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import json from '../../assets/data/ChampTunMSRRades.json';

@Injectable()
export class  ChampTunMSRRadesService {

  constructor(private http: HttpClient) {
  }

  public getJSON() {
    return json;

  }
}
