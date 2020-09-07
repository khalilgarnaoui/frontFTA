import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';


@Component({
    selector: 'app-form-demande-licence-runner',
    templateUrl: './form-demande-licence-runner.component.html',
    styleUrls: ['./form-demande-licence-runner.component.scss']
})
export class FormDemandeLicenceRunnerComponent implements OnInit {
    sexes = ['Homme', 'Femme'];
    types = ['enregistrement', 'renouvelement'];
    montant = 20;
    ext = false;
    licenceRunnerForm: FormGroup;

    constructor(private http: HttpClient) {
    }

    ngOnInit() {
        this.licenceRunnerForm = new FormGroup({
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
            paiement: new FormControl(null, Validators.required),
            photo: new FormControl(null, Validators.required),
            ccin: new FormControl(null, Validators.required),
            certificat: new FormControl(null, Validators.required),
            type: new FormControl(null, Validators.required)
        });
    }

    onImagePicked(event: Event) {
        const file = (event.target as HTMLInputElement).files;
        const name = (event.target as HTMLInputElement).name;
        if (name === 'photo') {
            this.licenceRunnerForm.patchValue({photo: file[0]});
        } else if (name === 'ccin') {
            this.licenceRunnerForm.patchValue({ccin: file[0]});
        } else if (name === 'paiement') {
            this.licenceRunnerForm.patchValue({paiement: file[0]});
        } else if (name === 'certificat') {
            this.licenceRunnerForm.patchValue({certificat: file[0]});
        }
        this.licenceRunnerForm.get(name).updateValueAndValidity();

    }

    onSubmit() {
        const postData = new FormData();
        for (const field in this.licenceRunnerForm.controls) {
            const control = this.licenceRunnerForm.get(field);
            if (control.value) {
                if (field in ['ccin', 'photo', 'paiement', 'certificat']) {
                    postData.append(field, control.value, field);
                } else {
                    postData.append(field, control.value);
                }
            } else {
                if (field in ['ccin', 'photo', 'paiement', 'certificat']) {
                    postData.append(field, '', field);
                } else {
                    postData.append(field, '');
                }

            }
        }
        this.licenceRunnerForm.reset();
        this.http
            .post<any>('http://localhost:3000/api/licence_runner',
                postData
            ).subscribe(() => {
            console.log('done');
        });
    }

}
