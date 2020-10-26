import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import json from '../../assets/data/FinalCCGafsa.json';

@Injectable()
export class  FinalCCGafsaService {

  constructor(private http: HttpClient) {
  }

  public getJSON() {
    return json;

  }
}
