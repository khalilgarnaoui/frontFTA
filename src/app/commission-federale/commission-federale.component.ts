import {Component, OnInit} from '@angular/core';
import {Commission} from '../_service/shared_files/commission.model';
import {CommissionFederaleService} from '../_service/commission-federale.service';
import {HttpClient} from '@angular/common/http';


@Component({
    selector: 'app-commission-federale',
    templateUrl: './commission-federale.component.html',
    styleUrls: ['./commission-federale.component.scss']
})
export class CommissionFederaleComponent implements OnInit {


    commissions = [];

    constructor(public commissionFederaleService: CommissionFederaleService, public http: HttpClient) {
    }

    ngOnInit() {
        this.commissionFederaleService.getCommission().subscribe(dataa => {
            if (dataa != null) {
                dataa = dataa.map(x => {
                    return {
                        id: x._id,
                        ...x
                    };
                });

                for (const commission of dataa) {
                    this.commissions.push(
                        new Commission(commission.id, commission.name, commission.email, commission.commission, commission.image));
                }
            }
        });
    }

}
