import { Route } from '@angular/router';

import { RoomIssuesComponent } from './';

export const ROOMS_ISSUES_ROUTE: Route = {
    path: 'roomissues',
    component: RoomIssuesComponent,
    data: {
        authorities: [],
        pageTitle: 'Room issues Page'
    }
};
