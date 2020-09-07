import {Injectable, OnInit} from '@angular/core';
import * as data from '../../assets/data/json/Centre/Centre.json';
import * as data1 from 'src/assets/data/json/Centre/centreDetail.json';

import {Centre} from '../shared/centre.model';
import {CentreDetail} from '../shared/centreDetail.model';
import {map} from "rxjs/operators";
import {HttpClient} from "@angular/common/http";
import {GalerieList} from "../shared/galerieList.model";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CentreDeFormationService {
  centreList: any = (data as any).default;
  centreDetail: any = (data1 as any).default;

  private postsUpdated = new Subject<Centre[]>();
  private postsUpdated1 = new Subject<any>();
  centres: Centre[] = [];
  centreDetails: CentreDetail[] = [];


  constructor(private http: HttpClient) {

  }

  getCentre() {

    this.http
      .get<{ message: string; centres: any }>(
        'http://localhost:3000/api/centre_de_formation'
      )
      .pipe(map((centreData) => {
        return centreData.centres.map(centre => {
          return {
            name: centre.name,
            directeur: centre.directeur,
            num: centre.num,
            _id: centre._id
          };
        });
      }))
      .subscribe(transformedCentres => {
        this.centres = transformedCentres;
        this.postsUpdated.next([...this.centres]);
      });

  }

  getCentreDetails() {
    // tslint:disable-next-line:no-shadowed-variable
    this.http
      .get<{ message: string; centres: any }>(
        'http://localhost:3000/api/centre_detail'
      )
      .pipe(map((centreData) => {
        return centreData.centres.map(centre => {
          return {
            name: centre.name,
            athlete: centre.athlete,
            category: centre.category,
            specialty: centre.specialty,
            club: centre.club,
            _id: centre._id
          };
        });
      }))
      .subscribe(transformedCentres => {
        this.centreDetails = transformedCentres;
        this.postsUpdated1.next([...this.centreDetails]);
      });
  }

  getPostUpdateListener() {
    return this.postsUpdated.asObservable();
  }

  getPostUpdateListener1() {
    return this.postsUpdated1.asObservable();
  }



}
