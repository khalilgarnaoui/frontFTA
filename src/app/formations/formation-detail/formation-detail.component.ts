import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {FormationModel} from '../../shared/shared_files/formation.model';
import {ActivatedRoute} from '@angular/router';
import {Formation20Service} from '../../_service/form20';
import {DomSanitizer} from '@angular/platform-browser';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';


@Component({
    selector: 'app-formation-detail',
    templateUrl: './formation-detail.component.html',
    styleUrls: ['./formation-detail.component.scss']
})
export class FormationDetailComponent implements OnInit {


    form: FormationModel = new FormationModel();
    pdfsrc;
    listFormation: FormationModel [];
    formId = null;
    formulaire: FormGroup;

    constructor(private route: ActivatedRoute,
                private formationService: Formation20Service,
                public sanitizer: DomSanitizer,
                private http: HttpClient) {
    }

    onSubmit() {
        this.formulaire.patchValue({
            formation: this.formId
        });
        var fd = new FormData();
        this.http.post('http://localhost:3000/api/form_formation', this.formulaire.value)
            .subscribe(res => {

            });
        this.formulaire.reset();

    }

    ngOnInit() {
        this.formulaire = new FormGroup({
            name: new FormControl(null, {validators: [Validators.required]}),
            date_naissance: new FormControl(null, {validators: [Validators.required]}),
            genre: new FormControl(null, {validators: [Validators.required]}),
            cin: new FormControl(null, {validators: [Validators.required]}),
            club: new FormControl(null, {validators: [Validators.required]}),
            equipe_nationale: new FormControl(null, {validators: [Validators.required]}),
            equipe_entraineur: new FormControl(null, {validators: [Validators.required]}),
            email: new FormControl(null, {validators: [Validators.required]}),
            tele: new FormControl(null, {validators: [Validators.required]}),
            formation: new FormControl(null)
        });

        this.route.params
            .subscribe((data) => {
                this.formId = data.id;
                if (this.formId) {
                    this.formationService.getJSON()
                        .subscribe(formations => {
                            this.listFormation = formations as FormationModel [];
                            this.form = this.listFormation.find(element => element._id === this.formId);
                            this.pdfsrc = 'http://localhost:3000/uploads/' + this.form.communique;
                        });

                }

            });
    }

}
