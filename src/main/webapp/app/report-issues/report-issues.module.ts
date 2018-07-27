import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { OdosCrrsUiSharedModule } from '../shared';
import { REPORTISSUES_ROUTE, ReportIssuesComponent } from '.';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReportIssuesService } from './report-issues.service';


@NgModule({
    imports: [
        OdosCrrsUiSharedModule,
        RouterModule.forChild([ REPORTISSUES_ROUTE ]),
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [
        ReportIssuesComponent,
    ],
    entryComponents: [
    ],
    providers: [
        ReportIssuesService
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class OdosCrrsUiReportIssuesModule {}
