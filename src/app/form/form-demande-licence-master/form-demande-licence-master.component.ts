import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';

@Component({
    selector: 'app-form-demande-licence-master',
    templateUrl: './form-demande-licence-master.component.html',
    styleUrls: ['./form-demande-licence-master.component.scss']
})
export class FormDemandeLicenceMasterComponent implements OnInit {
    sexes = ['Homme', 'Femme'];
    types = ['enregistrement', 'renouvelement'];
    licenceMasterForm: FormGroup;
    montant = 30;
    ext = false;

    constructor(private http: HttpClient) {
    }

    ngOnInit() {
        this.licenceMasterForm = new FormGroup({
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
            this.licenceMasterForm.patchValue({photo: file[0]});
        } else if (name === 'ccin') {
            this.licenceMasterForm.patchValue({ccin: file[0]});
        } else if (name === 'paiement') {
            this.licenceMasterForm.patchValue({paiement: file[0]});
        } else if (name === 'certificat') {
            this.licenceMasterForm.patchValue({certificat: file[0]});
        }
        this.licenceMasterForm.get(name).updateValueAndValidity();


    }


    onSubmit() {
        const postData = new FormData();
        for (const field in this.licenceMasterForm.controls) {
            const control = this.licenceMasterForm.get(field);
            if (control.value) {
                console.log('exist: ' + field);
                console.log(control.value);
                console.log('--------');
                if (field in ['ccin', 'photo', 'paiement', 'certificat']) {
                    postData.append(field, control.value, field);
                } else {
                    postData.append(field, control.value);
                }
            } else {
                console.log('doesnt exist: ' + field);
                console.log(control.value);
                console.log('--------');
                if (field in ['ccin', 'photo', 'paiement', 'certificat']) {
                    postData.append(field, '', field);
                } else {
                    postData.append(field, '');
                }

            }
        }
        this.licenceMasterForm.reset();
        this.http
            .post<any>('http://151.80.123.213:3000/api/licence_master',
                postData
            ).subscribe(() => {
            console.log('done');
        });
    }
}


// const postData = new FormData();
// postData.append('club', this.licenceMasterForm.controls.club.value);
// postData.append('ligue', this.licenceMasterForm.controls.ligue.value);
// postData.append('nom', this.licenceMasterForm.controls.nom.value);
// postData.append('prenom', this.licenceMasterForm.controls.prenom.value);
// postData.append('dateNaissance', this.licenceMasterForm.controls.dateNaissance.value);
// postData.append('lieu', this.licenceMasterForm.controls.lieu.value);
// postData.append('poids', this.licenceMasterForm.controls.poids.value);
// postData.append('taille', this.licenceMasterForm.controls.taille.value);
// postData.append('sexe', this.licenceMasterForm.controls.sexe.value);
// postData.append('nationalite', this.licenceMasterForm.controls.nationalite.value);
// postData.append('categorie', this.licenceMasterForm.controls.categorie.value);
// postData.append('numAncienneLicence', this.licenceMasterForm.controls.numAncienneLicence.value);
// postData.append('adresse', this.licenceMasterForm.controls.adresse.value);
// postData.append('numTel', this.licenceMasterForm.controls.numTel.value);
// postData.append('ccin', this.licenceMasterForm.controls.ccin.value,
//   this.licenceMasterForm.controls.ccin.value.name);
// postData.append('photo', this.licenceMasterForm.controls.photo.value,
//   this.licenceMasterForm.controls.photo.value.name);
// postData.append('certificat', this.licenceMasterForm.controls.certificat.value,
//   this.licenceMasterForm.controls.certificat.value.name);
// postData.append('paiement', this.licenceMasterForm.controls.paiement.value,
//   this.licenceMasterForm.controls.paiement.value.name);


// onImagePicked1(event: Event) {
//   const file = (event.target as HTMLInputElement).files;
//   this.licenceMasterForm.patchValue({photo: file[0]});
//   this.licenceMasterForm.get('photo').updateValueAndValidity();
//   console.log(file);
//   console.log(this.licenceMasterForm.controls.photo.value.name);
//
// }
//
// onImagePicked2(event: Event) {
//   const file = (event.target as HTMLInputElement).files;
//   this.licenceMasterForm.patchValue({ccin: file[0]});
//   this.licenceMasterForm.get('ccin').updateValueAndValidity();
//   console.log(file);
//   console.log(this.licenceMasterForm.controls.ccin.value.name);
//
// }
// onImagePicked3(event: Event) {
//   const file = (event.target as HTMLInputElement).files;
//   this.licenceMasterForm.patchValue({paiement: file[0]});
//   this.licenceMasterForm.get('paiement').updateValueAndValidity();
//   console.log(file);
//   console.log(this.licenceMasterForm.controls.paiement.value.name);
//
// }
// onImagePicked4(event: Event) {
//   const file = (event.target as HTMLInputElement).files;
//   this.licenceMasterForm.patchValue({certificat: file[0]});
//   this.licenceMasterForm.get('certificat').updateValueAndValidity();
//   console.log(file);
//   console.log(this.licenceMasterForm.controls.certificat.value.name);
//
// }
