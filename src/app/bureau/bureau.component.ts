import {Component, OnInit} from '@angular/core';
import {Worker} from '../_service/shared_files/worker.model';
import {BureauService} from '../_service/bureau.service';
import {HttpClient} from '@angular/common/http';


@Component({
    selector: 'app-bureau',
    templateUrl: './bureau.component.html',
    styleUrls: ['./bureau.component.scss']
})
export class BureauComponent implements OnInit {

    workers = [];

    constructor(public bureauService: BureauService, private http: HttpClient) {
    }

    ngOnInit() {
        window.scroll(0, 0);
        this.bureauService.getBureau().subscribe(dataa => {
            if (dataa != null) {
                dataa = dataa.map(x => {
                    return {
                        id: x._id,
                        ...x
                    };
                });
                for (const data of dataa) {
                    this.workers.push(new Worker(data.id, data.name, data.dateNaissance, data.cin, data.tache,
                        data.mobile, data.mobile2, data.email, data.image));
                }
            }
        });

    }


}
