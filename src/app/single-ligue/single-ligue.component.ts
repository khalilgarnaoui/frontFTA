import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Ligue} from '../_service/shared_files/ligue.model';
import {Club} from "../_service/shared_files/club.model";
import {LigueService} from "../_service/ligue.service";


@Component({
  selector: 'app-single-ligue',
  templateUrl: './single-ligue.component.html',
  styleUrls: ['./single-ligue.component.scss']
})
export class SingleLigueComponent implements OnInit {
  ligueID;
  ligue: Ligue;

  constructor(private route: ActivatedRoute, public ligueService: LigueService) {
  }

  ngOnInit() {
    this.route.params.subscribe(
      data => {
        this.ligueID = data.id;
        this.ligueService.getLigue(this.ligueID).subscribe(data => {
          // @ts-ignore
          data = {id: data._id, ...data};
          this.ligue = new Ligue(data.id, data.name, data.president,
            data.email, data.mobile, data.fax, data.image);
        });
      }
    );
    window.scroll(0, 0);
  }
}
