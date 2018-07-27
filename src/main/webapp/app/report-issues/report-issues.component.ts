import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl  } from '@angular/forms';

@Component({
  selector: 'jhi-report-issues',
  templateUrl: './report-issues.component.html',
  styles: []
})
export class ReportIssuesComponent implements OnInit {
    reportIssuesDetailForm:FormGroup;
    fullName: FormControl;
    reportDate: FormControl;
    roomIssuesID: FormControl;
    reportIssuesDescription: FormControl;

  constructor() { }

  ngOnInit() {

    this.reportIssuesDetailForm = new FormGroup({
      fullName: new FormControl('', Validators.required),
      reportDate: new FormControl('', Validators.required),
      roomIssuesID: new FormControl('', Validators.required),
      reportIssuesDescription: new FormControl('', Validators.required)
    });
  }
  SubmitRortIssues(){

  }
}
