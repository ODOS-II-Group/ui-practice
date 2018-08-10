import { Route } from '@angular/router';

import { ReportIssuesComponent } from '.';

export const REPORTISSUES_ROUTE: Route = {
    path: 'roomIssues/:ID',
    component: ReportIssuesComponent,
    data: {
        authorities: [],
        pageTitle: 'Reserve a room'
    }
};
