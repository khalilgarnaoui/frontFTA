import {Injectable} from '@angular/core';
import {GalerieList} from '../shared/galerieList.model';
import * as data from '../../assets/data/json/Galerie/PicturesPaths.json';
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GalerieService {
  datas: any = (data as any).default;
  picturePath = [];
  galerie: GalerieList[] = [];
  private postsUpdated = new Subject<GalerieList[]>();


  // galerie: GalerieList[] = [
  //   new GalerieList(1, 'single-player', 'Championnat Arabe Cadets 2019',
  //     'assets/img/players/1.jpg'),
  //   new GalerieList(2, 'single-player', 'Championnat Arabe Cadets 2019',
  //     'assets/img/players/1.jpg'),
  //   new GalerieList(3, 'single-player', 'Championnat Arabe Cadets 2019',
  //     'assets/img/players/1.jpg'),
  //   new GalerieList(4, 'single-player', 'Championnat Arabe Cadets 2019',
  //     'assets/img/players/1.jpg'),
  //   new GalerieList(5, 'single-player', 'Championnat Arabe Cadets 2019',
  //     'assets/img/players/1.jpg'),
  //   new GalerieList(6, 'single-player', 'Championnat Arabe Cadets 2019',
  //     'assets/img/players/1.jpg'),
  //   new GalerieList(7, 'single-player', 'Championnat Arabe Cadets 2019',
  //     'assets/img/players/1.jpg'),
  //   new GalerieList(8, 'single-player', 'Championnat Arabe Cadets 2019',
  //     'assets/img/players/1.jpg'),
  // ];

  constructor(private http: HttpClient) {
  }

  getGalerieList() {
    this.http
      .get<{ message: string; galeries: any }>(
        'http://localhost:3000/api/galerie_list'
      )
      .pipe(map((galerieData) => {
        return galerieData.galeries.map(galerie => {
          return {
            galeriePath: galerie.galeriePath,
            galerieTitle: galerie.galerieTitle,
            galerieImgPath: galerie.galerieImgPath,
            _id: galerie._id
          };
        });
      }))
      .subscribe(transformedGaleries => {
        this.galerie = transformedGaleries;
        this.postsUpdated.next([...this.galerie]);
      });
  }



  getPictures(galerieId: string) {
  //   for (const data of this.datas) {
  //     if (galerieId == data.id) {
  //       for (const path of data.pathImg) {
  //         this.picturePath.push(path);
  //       }
  //     }
  //   }
  //   console.log(this.datas);
    console.log('this is the id');
    console.log(galerieId);
    this.http
      .get<{ message: string; paths: any }>(
        `http://localhost:3000/api/galerie_detail/${galerieId}`
      )
      .pipe(map((galerieData) => {
        return galerieData.paths.map(galerie => {
          return {
            galerieName: galerie.galerieName,
            picturePaths: galerie.picturePaths,
            _id: galerie._id
          };
        });
      }))
      .subscribe(transformedGaleries => {
        this.picturePath = transformedGaleries[0].picturePaths;
        console.log(this.picturePath)
        this.postsUpdated.next([...this.picturePath]);
      });
  }

  getPostUpdateListener() {
    return this.postsUpdated.asObservable();
  }

}
