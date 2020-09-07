import {Injectable} from '@angular/core';
import * as data from '../../assets/data/evenement.json';
import {Evenement} from '../shared/evenement.model';
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";
import {Subject} from "rxjs";
import {Centre} from "../shared/centre.model";

@Injectable({
  providedIn: 'root'
})
export class EvenementService {
  datas: any = (data as any).default;
  evenements: Evenement[] = [];
  private eventsUpdated = new Subject<Evenement[]>();


  constructor(private http: HttpClient) {

  }

  getEvent() {
    this.http
      .get<{ message: string; events: any }>(
        'http://localhost:3000/api/evenement'
      )
      .pipe(map((eventData) => {
        return eventData.events.map(event => {
          return {
            eventPath: event.eventPath,
            eventTitle: event.eventTitle,
            eventDate: event.eventDate,
            eventComments: event.eventComments,
            eventImgPath: event.eventImgPath,
            eventDescrip: event.eventDescrip,
            _id: event._id
          };
        });
      }))
      .subscribe(transformedEvents => {
        this.evenements = transformedEvents;
        this.eventsUpdated.next([...this.evenements]);
      });

  }

  getPostUpdateListener() {
    return this.eventsUpdated.asObservable();
  }

  // getEvent() {
  //   // tslint:disable-next-line:no-shadowed-variable
  //   for (const data of this.datas) {
  //     this.evenements.push(new Evenement(data.eventId, data.eventPath, data.eventTitle,
  //       data.eventDate, data.eventComments, data.eventImgPath, data.eventDescrip));
  //   }
  // }
}
