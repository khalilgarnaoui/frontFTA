import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {GallerieComponent} from '../gallerie.component';
import {GalerieList} from '../../shared/galerieList.model';
import {GalerieService} from '../../_service/galerie.service';
import {Subscription} from 'rxjs';

@Component({
    providers: [GallerieComponent],
    selector: 'app-galerie-detail',
    templateUrl: './galerie-detail.component.html',
    styleUrls: ['./galerie-detail.component.scss']
})
export class GalerieDetailComponent implements OnInit {
    galerieId;
    galerie: GalerieList;
    // push data into the array from the backend
    picturePath = [];
    private postsSub: Subscription;

    constructor(public route: ActivatedRoute, public galeris: GallerieComponent, private galerieService: GalerieService) {

    }

    ngOnInit() {
        this.route.params.subscribe(
            data => {
                console.log(data.id);
                this.galerieId = data.id;
            }
        );
        this.galerieService.getPictures(this.galerieId);
        // this.picturePath = this.galerieService.picturePath;
        this.postsSub = this.galerieService.getPostUpdateListener()
            .subscribe((posts: []) => {
                this.picturePath = posts;
            });
    }


}
