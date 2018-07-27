import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router}  from '@angular/router';
import { ResportIssuesService } from './report-issues.service';
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

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private resportIssuesService: ResportIssuesService) {
    
   }

  ngOnInit() {

    this.reportIssuesDetailForm = new FormGroup({
      fullName: new FormControl('', Validators.required),
      reportDate: new FormControl('', Validators.required),
      roomIssuesID: new FormControl('', Validators.required),
      reportIssuesDescription: new FormControl('', Validators.required)
    });
  }
  SubmitRortIssues(){
    let loadData = {
      "fullName":this.fullName.value,
      "reportDate": this.reportDate.value,
      "roomIssueID": this.roomIssuesID.value,
      "reportIssuesDescription": this.reportIssuesDescription.value
    }
    console.log("Load data ", loadData);
    this.resportIssuesService.postReportIssuesData(loadData)
    .subscribe((response)=>{
        setTimeout((router: Router) => {
            this.router.navigate(['']);
        }, 5000);
    }, (error)=> {
        setTimeout((router: Router) => {
            this.router.navigate(['']);
        }, 2000);
    } );
  }
}
