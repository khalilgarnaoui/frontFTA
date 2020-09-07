import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-form-demande-juge',
  templateUrl: './form-demande-juge.component.html',
  styleUrls: ['./form-demande-juge.component.scss']
})
export class FormDemandeJugeComponent implements OnInit {
  DemandeJuge: FormGroup;
  types = ['enregistrement', 'renouvelement'];

  constructor(private http: HttpClient) {

  }

  ngOnInit() {
    this.DemandeJuge = new FormGroup({
      nom_prenomJuge: new FormControl(null, Validators.required),
      ddn: new FormControl(null, Validators.required),
      niveau: new FormControl(null, Validators.required),
      adresse: new FormControl(null, Validators.required),
      codepostal: new FormControl(null, Validators.required),
      poste: new FormControl(null, Validators.required),
      ccpOuCcb: new FormControl(null, Validators.required),
      cin: new FormControl(null, Validators.required),
      email: new FormControl(null, Validators.required),
      tel: new FormControl(null, Validators.required),
      poids: new FormControl(null, Validators.required),
      taille: new FormControl(null, Validators.required),
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
      this.DemandeJuge.patchValue({photo: file[0]});
    } else if (name === 'paiement') {
      this.DemandeJuge.patchValue({paiement: file[0]});
    } else if (name === 'certificat') {
      this.DemandeJuge.patchValue({certificat: file[0]});
    }
    this.DemandeJuge.get(name).updateValueAndValidity();
  }


  onSubmit() {
    const postData = new FormData();
    for (const field in this.DemandeJuge.controls) {
      const control = this.DemandeJuge.get(field);
      if (control.value) {
        if (field in ['photo', 'paiement', 'certificat']) {
          postData.append(field, control.value, field);
        } else {
          postData.append(field, control.value);
        }
      } else {
        if (field in ['photo', 'paiement', 'certificat']) {
          postData.append(field, '', field);
        } else {
          postData.append(field, '');
        }

      }
    }
    this.DemandeJuge.reset();
    this.http
      .post<any>('http://localhost:3000/api/demande_juge',
        postData
      ).subscribe(() => {
      console.log('done');
    });
  }


}
