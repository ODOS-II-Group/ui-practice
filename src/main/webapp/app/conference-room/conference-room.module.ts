import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { RouterModule } from '@angular/router';

import { OdosCrrsUiSharedModule } from '../shared';
import { CONFERENCE_ROOM_ROUTE, ConferenceRoomComponent } from "./";

@NgModule({
    imports: [
        OdosCrrsUiSharedModule,
        RouterModule.forChild([ CONFERENCE_ROOM_ROUTE ])
    ],
    declarations: [
        ConferenceRoomComponent,
    ],
    entryComponents: [
    ],
    providers: [
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class OdosCrrsUiConferenceRoomModule {}
