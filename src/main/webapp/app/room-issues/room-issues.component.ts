import { Component, OnInit } from '@angular/core';
import {RoomIssuesService} from "./room-issues.service";

@Component({
  selector: 'jhi-room-issues',
  templateUrl: './room-issues.component.html',
  styleUrls: [
      'room-issues.scss'
  ]
})
export class RoomIssuesComponent implements OnInit {
    defaultIssueStatus = "REPORTED";
    issueStatusOptions = ["REPORTED", "DECLINED", "ACCEPTED", "FIXED"];
    allIssues: any;

  constructor(private roomIssuesService: RoomIssuesService) { }

  ngOnInit() {
      this.roomIssuesService.getAllIssues().subscribe(
          (response) => {
              this.allIssues = response;
              console.log("ALL ISSUES ->" + this.allIssues);
          },
          (error) => {
              console.log(error);
          }
      );
  }

  public statuschange(statusChange, issue ){
      statusChange = statusChange.split(":")[1].split(" ")[1];
      issue["status"] = statusChange;

      this.roomIssuesService.updateAnIssue(issue).subscribe(
          (response) => {
              console.log("UPDATED ISSUE " + JSON.stringify(response));
          },
          (error) => {
              console.log(error);
          }
      )
    }
}
