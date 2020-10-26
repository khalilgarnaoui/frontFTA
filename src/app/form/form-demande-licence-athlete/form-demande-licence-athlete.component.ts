import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';


@Component({
    selector: 'app-form-demande-licence-athlete',
    templateUrl: './form-demande-licence-athlete.component.html',
    styleUrls: ['./form-demande-licence-athlete.component.scss']
})
export class FormDemandeLicenceAthleteComponent implements OnInit {
    sexes = ['Homme', 'Femme'];
    types = ['enregistrement', 'renouvelement'];
    licenceAthleteForm: FormGroup;
    montant = -1;
    ext = true;

    constructor(private http: HttpClient) {
    }


    ngOnInit() {
        this.licenceAthleteForm = new FormGroup({
            club: new FormControl(null, Validators.required),
            ligue: new FormControl(null, Validators.required),
            nom: new FormControl(null, Validators.required),
            prenom: new FormControl(null, Validators.required),
            dateNaissance: new FormControl(null, Validators.required),
            lieu: new FormControl(null, Validators.required),
            poids: new FormControl(null, Validators.required),
            taille: new FormControl(null, Validators.required),
            sexe: new FormControl(null, Validators.required),
            nationalite: new FormControl(null, Validators.required),
            categorie: new FormControl(null, Validators.required),
            numAncienneLicence: new FormControl(null, Validators.required),
            adresse: new FormControl(null, Validators.required),
            numTel: new FormControl(null, Validators.required),
            cin: new FormControl(null, Validators.required),
            certificat: new FormControl(null, Validators.required),
            paiement: new FormControl(null, Validators.required),
            photo: new FormControl(null, Validators.required),
            type: new FormControl(null, Validators.required)
        });
    }

    onImagePicked(event: Event) {
        const file = (event.target as HTMLInputElement).files;
        const name = (event.target as HTMLInputElement).name;
        if (name === 'photo') {
            this.licenceAthleteForm.patchValue({photo: file[0]});
        } else if (name === 'cin') {
            this.licenceAthleteForm.patchValue({cin: file[0]});
        } else if (name === 'paiement') {
            this.licenceAthleteForm.patchValue({paiement: file[0]});
        } else if (name === 'certificat') {
            this.licenceAthleteForm.patchValue({certificat: file[0]});
        }
        this.licenceAthleteForm.get(name).updateValueAndValidity();
    }

    onSubmit() {
        const postData = new FormData();
        for (const field in this.licenceAthleteForm.controls) {
            const control = this.licenceAthleteForm.get(field);
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
        this.licenceAthleteForm.reset();
        this.http
            .post<any>('http://151.80.123.213:3000/api/licence_athlete',
                postData
            ).subscribe(() => {
            console.log('done');
        });
    }


}
