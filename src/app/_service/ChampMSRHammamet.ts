import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import json from '../../assets/data/ChampMSRHammamet.json';

@Injectable()
export class  ChampMSRHammametService {

  constructor(private http: HttpClient) {
  }

  public getJSON() {
    return json;

  }
}
