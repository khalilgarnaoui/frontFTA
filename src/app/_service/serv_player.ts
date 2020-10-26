import { Component, Input } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import json from '../../assets/data/record1.json';

//Record1_Accueil
@Injectable()
export class  PlayerService {

  constructor(private http: HttpClient) {
  }

  public getJSON() {
    return json;

  }
}
