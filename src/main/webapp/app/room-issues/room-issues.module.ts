import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OdosCrrsUiSharedModule } from "../shared";
import { ROOMS_ISSUES_ROUTE, RoomIssuesComponent } from './';
import { RoomIssuesService } from './room-issues.service';
import { RouterModule } from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
      OdosCrrsUiSharedModule,
      RouterModule.forChild([ ROOMS_ISSUES_ROUTE ])
  ],
  declarations: [
      RoomIssuesComponent
  ],
    providers: [
        RoomIssuesService
    ]
})
export class OdosCrrsUiRoomIssuesModule { }
