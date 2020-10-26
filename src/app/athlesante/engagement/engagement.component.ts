import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';


@Component({
    selector: 'app-engagement',
    templateUrl: './engagement.component.html',
    styleUrls: ['./engagement.component.scss']
})
export class EngagementComponent implements OnInit {


    engagementForm: FormGroup;
    json: any;

    constructor(private http: HttpClient) {
    }

    ngOnInit() {

        this.engagementForm = new FormGroup({
            description: new FormControl(null, Validators.required),
            programme: new FormControl(null, Validators.required),
            relationSS: new FormControl(null, Validators.required)
        });

    }

    onSubmit() {
        this.json = JSON.stringify(this.engagementForm.value);
        console.log(this.json);
        this.http.post('http://151.80.123.213:3000/api/engagement_athlesante', this.json)
            .subscribe(responseData => {
                console.log(responseData);
            });
        this.engagementForm.reset();

    }
}
