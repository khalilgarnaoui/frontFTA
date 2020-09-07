import {Component, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';

@Component({
    selector: 'app-form-demande-licence-dirigeant',
    templateUrl: './form-demande-licence-dirigeant.component.html',
    styleUrls: ['./form-demande-licence-dirigeant.component.scss']
})
export class FormDemandeLicenceDirigeantComponent implements OnInit {
    licenceDirigeantForm: FormGroup;
    filesUpload: Array<File> = [];

    constructor(private http: HttpClient) {
    }

    ngOnInit() {
        this.licenceDirigeantForm = new FormGroup({
            nom: new FormControl(null, Validators.required),
            prenom: new FormControl(null, Validators.required),
            dateNaissance: new FormControl(null, Validators.required),
            lieuNaissance: new FormControl(null, Validators.required),
            adresse: new FormControl(null, Validators.required),
            codePostal: new FormControl(null, Validators.required),
            profession: new FormControl(null, Validators.required),
            diplomes: new FormArray([new FormControl(null, Validators.required)]),
            cin: new FormControl(null, Validators.required),
            dateEmission: new FormControl(null, Validators.required),
            lieuEmission: new FormControl(null, Validators.required),
            numTel: new FormControl(null, Validators.required),
            email: new FormControl(null, Validators.required),
            paiement: new FormControl(null, Validators.required),
            photo: new FormControl(null, Validators.required),
            ccin: new FormControl(null, Validators.required)
        });
    }

    onAddDiplome() {
        const control = new FormControl(null, Validators.required);
        (this.licenceDirigeantForm.get('diplomes') as FormArray).push(control);
    }

    onImagePicked(event: Event) {
        const file = (event.target as HTMLInputElement).files;
        const name = (event.target as HTMLInputElement).name;
        // console.log(file[0]);
        if (name === 'photo') {
            this.licenceDirigeantForm.patchValue({photo: file[0]});
        } else if (name === 'ccin') {
            this.licenceDirigeantForm.patchValue({ccin: file[0]});
        } else if (name === 'paiement') {
            this.licenceDirigeantForm.patchValue({paiement: file[0]});
        } else if (name === 'diplomes') {
            this.filesUpload.push(file[0]);
            console.log(this.filesUpload);
        }
        this.licenceDirigeantForm.get(name).updateValueAndValidity();
    }

    onSubmit() {
        // const invalid = [];
        // const controls = this.licenceDirigeantForm.controls;
        // for (const name in controls) {
        //   if (controls[name].invalid) {
        //     invalid.push(name);
        //   }
        // }
        const postData = new FormData();
        for (const field in this.licenceDirigeantForm.controls) {
            const control = this.licenceDirigeantForm.get(field);
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
        this.licenceDirigeantForm.reset();
        this.http
            .post<any>('http://localhost:3000/api/licence_dirigeant',
                postData
            ).subscribe(() => {
            console.log('done');
        });
    }
}


