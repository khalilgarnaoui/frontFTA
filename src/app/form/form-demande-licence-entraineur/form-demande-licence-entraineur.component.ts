import {Component, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';

@Component({
    selector: 'app-form-demande-licence-entraineur',
    templateUrl: './form-demande-licence-entraineur.component.html',
    styleUrls: ['./form-demande-licence-entraineur.component.scss']
})
export class FormDemandeLicenceEntraineurComponent implements OnInit {
    licenceEntraineurForm: FormGroup;
    filesUpload: Array<File> = [];
    types = ['enregistrement', 'renouvelement'];

    constructor(private http: HttpClient) {
    }

    ngOnInit() {
        this.licenceEntraineurForm = new FormGroup({
            nom: new FormControl(null, Validators.required),
            prenom: new FormControl(null, Validators.required),
            dateNaissance: new FormControl(null, Validators.required),
            lieuNaissance: new FormControl(null, Validators.required),
            adresse: new FormControl(null, Validators.required),
            codePostal: new FormControl(null, Validators.required),
            profession: new FormControl(null, Validators.required),
            diplomes: new FormArray([new FormControl(null, Validators.required)]),
            gradeActuel: new FormControl(null, Validators.required),
            clubEntraine: new FormControl(null, Validators.required),
            ccpOuCcb: new FormControl(null, Validators.required),
            cin: new FormControl(null, Validators.required),
            dateEmission: new FormControl(null, Validators.required),
            lieuEmission: new FormControl(null, Validators.required),
            numTel: new FormControl(null, Validators.required),
            email: new FormControl(null, Validators.required),
            paiement: new FormControl(null, Validators.required),
            photo: new FormControl(null, Validators.required),
            ccin: new FormControl(null, Validators.required),
            type: new FormControl(null, Validators.required)
        });
    }

    onAddDiplome() {
        const control = new FormControl(null, Validators.required);
        (this.licenceEntraineurForm.get('diplomes') as FormArray).push(control);
    }

    onImagePicked(event: Event) {
        const file = (event.target as HTMLInputElement).files;
        const name = (event.target as HTMLInputElement).name;
        if (name === 'photo') {
            this.licenceEntraineurForm.patchValue({photo: file[0]});
        } else if (name === 'ccin') {
            this.licenceEntraineurForm.patchValue({ccin: file[0]});
        } else if (name === 'paiement') {
            this.licenceEntraineurForm.patchValue({paiement: file[0]});
        } else if (name === 'diplomes') {
            this.filesUpload.push(file[0]);
        }
        this.licenceEntraineurForm.get(name).updateValueAndValidity();
    }

    onSubmit() {
        // console.log(this.licenceEntraineurForm);
        // const invalid = [];
        // const controls = this.licenceEntraineurForm.controls;
        // for (const name in controls) {
        //   if (controls[name].invalid) {
        //     invalid.push(name);
        //   }
        // }
        const postData = new FormData();
        for (const field in this.licenceEntraineurForm.controls) {
            const control = this.licenceEntraineurForm.get(field);
            if (control.value) {
                if (field in ['ccin', 'photo', 'paiement']) {
                    postData.append(field, control.value, field);
                } else if (field === 'diplomes') {
                    for (let i = 0; i < this.filesUpload.length; i++) {
                        postData.append(field, this.filesUpload[i], this.filesUpload[i].name);
                    }
                } else {
                    postData.append(field, control.value);
                }
            } else {
                if (field in ['diplomes', 'ccin', 'photo', 'paiement']) {
                    postData.append(field, '', field);
                } else {
                    postData.append(field, '');
                }

            }
        }
        this.licenceEntraineurForm.reset();
        this.http
            .post<any>('http://localhost:3000/api/licence_entraineur',
                postData
            ).subscribe(() => {
            console.log('done');
        });
    }
}
