import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router}  from '@angular/router';
import { ReportIssuesService } from './report-issues.service';
import { FormGroup, Validators, FormControl  } from '@angular/forms';
import { LoginService } from '../shared/login/login.service';

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
    today = new Date();
    roomId: number;
    sDate: any;
    userName: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private loginservice:LoginService,
    private reportIssuesService: ReportIssuesService) {
    
   }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.roomId = params['ID'];
      console.log("This is room conference ID ", this.roomId);
      this.userName= MSCredentials.name; 
    });

    this.reportIssuesDetailForm = new FormGroup({
      fullName: new FormControl('', Validators.required),
      reportDate: new FormControl('', Validators.required),
      roomIssuesID: new FormControl('', Validators.required),
      reportIssuesDescription: new FormControl('', Validators.required)
      
    });
    this.sDate = this.today.getFullYear() + "-" + (this.today.getMonth())+1 + "-" + this.today.getDate();
  }
  SubmitRortIssues(){
    let loadData = {
      "comment": this.reportIssuesDetailForm.get('reportIssuesDescription').value,
      "status": "REPORTED",
      "requestorName": "Tola",
      "reportDate": this.sDate,
      "conferenceRoomId": this.roomId
    }
    console.log("Load data ", loadData);
    this.reportIssuesService.postReportIssuesData(loadData)
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
