import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';

@Component({
    selector: 'app-demande-affiliation',
    templateUrl: './demande-affiliation.component.html',
    styleUrls: ['./demande-affiliation.component.scss']
})
export class DemandeAffiliationComponent implements OnInit {
    AffiliationForm: FormGroup;
    types = ['enregistrement', 'renouvelement'];

    constructor(private http: HttpClient) {
    }

    ngOnInit() {
        this.AffiliationForm = new FormGroup({
            date: new FormControl(null, Validators.required),
            type: new FormControl(null, Validators.required),
            gouvernorat: new FormControl(null, Validators.required),
            nom_club: new FormControl(null, Validators.required),
            adresse: new FormControl(null, Validators.required),
            codepostal: new FormControl(null, Validators.required),
            num_visa: new FormControl(null, Validators.required),
            date_visa: new FormControl(null, Validators.required),
            couleurs: new FormControl(null, Validators.required),
            ccp: new FormControl(null, Validators.required),
            tel: new FormControl(null, Validators.required),
            fax: new FormControl(null, Validators.required),
            pres_comitedirecteur: new FormControl(null, Validators.required),
            secretaire_comitedirecteur: new FormControl(null, Validators.required),
            tresorier_comitedirecteur: new FormControl(null, Validators.required),
            pres_sectionathlet: new FormControl(null, Validators.required),
            secretaire_sectionathlet: new FormControl(null, Validators.required),
            tresorier_sectionathlet: new FormControl(null, Validators.required),
            directeur_tech: new FormControl(null, Validators.required),
            nom_perschargee: new FormControl(null, Validators.required),
            adresse_perschargee: new FormControl(null, Validators.required),
        });
    }

    onSubmit() {
        const postData = new FormData();
        for (const field in this.AffiliationForm.controls) {
            const control = this.AffiliationForm.get(field);
            if (control.value) {
                if (field in ['cin', 'photo', 'paiement', 'certificat']) {
                    postData.append(field, control.value, field);
                } else {
                    postData.append(field, control.value);
                }
            } else {
                if (field in ['cin', 'photo', 'paiement', 'certificat']) {
                    postData.append(field, '', field);
                } else {
                    postData.append(field, '');
                }

            }
        }
        this.AffiliationForm.reset();
        this.http
            .post<any>('http://localhost:3000/api/demande_affiliation',
                postData
            ).subscribe(() => {
            console.log('done');
        });
    }

}
