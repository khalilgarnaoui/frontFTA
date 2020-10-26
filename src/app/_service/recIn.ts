import { Component, Input } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import json from '../../assets/data/recordIn.json';

//Record_Indoors
@Injectable()
export class  RecordInService {

  constructor(private http: HttpClient) {
  }

  public getJSON() {
    return json;

  }
}
