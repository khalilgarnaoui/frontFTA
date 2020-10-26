import { Component, OnInit, Input } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ParticipantModel} from '../../shared/shared_files/participant.model';

@Component({
  selector: 'app-liste-participant',
  templateUrl: './liste-participant.component.html',
  styleUrls: ['./liste-participant.component.scss']
})
export class ListeParticipantComponent implements OnInit {
  @Input() formId;
  participantFormation: ParticipantModel [] = [];
  participant: ParticipantModel [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('http://151.80.123.213:3000/api/participant_formation')
        .subscribe(participants => {
          this.participant = participants as ParticipantModel [];
          this.participantFormation = this.participant.filter( e => e.formation === this.formId);
        });
  }

}
