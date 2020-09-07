import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {HttpClient, HttpHeaders} from '@angular/common/http';
// import * as jwt_decode from 'jwt-decode';

@Component({
    selector: 'app-demande-session',
    templateUrl: './demande-session.component.html',
    styleUrls: ['./demande-session.component.scss']
})
export class DemandeSessionComponent implements OnInit {

    sessionForm: FormGroup;
    json: any;

    constructor(private http: HttpClient) {
    }

    ngOnInit() {

        // localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1haWwiLCJ1c2VySWQiOiI1ZTg3N2MxNDNmOWI2OTBjYThlMjBmNzkiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE1ODY3Mzg5NzAsImV4cCI6MTU4Njc0MjU3MH0.KS2E4__5SPnTDnvQi9nJzhXrkMv2xiLEfPjZOV8jLAg');
        // localStorage.getItem('token');
        // const decoded = jwt_decode(localStorage.getItem('token'));
        // console.log(decoded.userId);

        this.sessionForm = new FormGroup({
            date_session: new FormControl(null, Validators.required),
            name: new FormControl(null, Validators.required),
            lieu: new FormControl(null, Validators.required),
            annee_sportive: new FormControl(null, Validators.required),
            // id_ligue: new FormControl(decoded.userId)
        });
    }

    onSubmit() {
        this.json = JSON.stringify(this.sessionForm.value);
        console.log(this.json);
        this.http.post('http://localhost:3000/api/demande_session', this.json, {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        })
            .subscribe(responseData => {
                console.log(responseData);
            });
        this.sessionForm.reset();

    }

}
