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

  constructor(private roomIssuesService: RoomIssuesService) { }

  ngOnInit() {
  }

}
