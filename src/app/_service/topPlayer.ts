import { Component, Input } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import json from '../../assets/data/topPlayer.json';

@Injectable()
export class  TopPlayerService {

  constructor(private http: HttpClient) {
  }

  public getJSON() {
    return json;

  }
}
