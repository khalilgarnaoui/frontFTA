import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';

@Component({
    selector: 'app-demande-mutation',
    templateUrl: './demande-mutation.component.html',
    styleUrls: ['./demande-mutation.component.scss']
})
export class DemandeMutationComponent implements OnInit {
    DemandeMutation: FormGroup;

    constructor(private http: HttpClient) {
    }

    ngOnInit() {
        this.DemandeMutation = new FormGroup({
            nom_prenom: new FormControl(null, Validators.required),
            ddn: new FormControl(null, Validators.required),
            adresse: new FormControl(null, Validators.required),
            poste: new FormControl(null, Validators.required),
            saisionSportive: new FormControl(null, Validators.required),
            nomAsso: new FormControl(null, Validators.required),
            motif: new FormControl(null, Validators.required),
        });
    }

    onSubmit() {
        const postData = new FormData();
        for (const field in this.DemandeMutation.controls) {
            const control = this.DemandeMutation.get(field);
            if (control.value) {
                postData.append(field, control.value);
            } else {
                postData.append(field, '');
            }
        }
        this.DemandeMutation.reset();
        this.http
            .post<any>('http://151.80.123.213:3000/api/demande_mutation',
                postData
            ).subscribe(() => {
            console.log('done');
        });
    }

}
