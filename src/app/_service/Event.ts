import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import json from '../../assets/data/evenement.json';

@Injectable()
export class  EventService {

  constructor(private http: HttpClient) {
  }

  public getJSON() {
    return json;

  }
}
