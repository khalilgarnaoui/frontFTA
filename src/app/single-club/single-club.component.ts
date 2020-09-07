import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Club} from '../_service/shared_files/club.model';
import {ClubsComponent} from '../clubs/clubs.component';
import {ClubsService} from '../_service/clubs.service';

@Component({
  providers: [ClubsComponent],
  selector: 'app-single-club',
  templateUrl: './single-club.component.html',
  styleUrls: ['./single-club.component.scss']
})
export class SingleClubComponent implements OnInit {
  clubID;

  club: Club;

  constructor(private route: ActivatedRoute, public clubservice: ClubsService) {
  }

  ngOnInit() {
    this.route.params.subscribe(
      data => {
        this.clubID = data.id;
        this.clubservice.getClub(this.clubID).subscribe(data => {
          // @ts-ignore
          data = {id: data._id, ...data};

          this.club = new Club(data.id, data.name, data.president_secretaireGenerale,
            data.mobilePresident_secretaireGenerale, data.mobileClub, data.faxClub, data.adresse, data.gouvernorat,
            data.gouvernoratFR.replace(/\s/g, ''), data.affiliated,
            data.image);
        });
      }
    );
    window.scroll(0, 0);
  }
}
