import {Component, OnDestroy, OnInit} from '@angular/core';
import {GalerieList} from '../shared/galerieList.model';
import {GalerieService} from '../_service/galerie.service';
import {Subscription} from 'rxjs';

@Component({
    selector: 'app-gallerie',
    templateUrl: './gallerie.component.html',
    styleUrls: ['./gallerie.component.scss']
})
export class GallerieComponent implements OnInit, OnDestroy {

    galerie: GalerieList[] = [];
    private postsSub: Subscription;


    constructor(private galerieService: GalerieService) {
    }


    ngOnInit() {
        this.galerieService.getGalerieList();
        this.postsSub = this.galerieService.getPostUpdateListener()
            .subscribe((posts: GalerieList[]) => {
                this.galerie = posts;
            });
    }

    ngOnDestroy(): void {
        this.postsSub.unsubscribe();
    }

}
