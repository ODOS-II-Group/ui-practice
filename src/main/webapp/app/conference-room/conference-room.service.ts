import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { CRRS_API_URL } from '../app.constants';
import { BuildingInfo } from './conference-room.model';
import {LocalStorageService, SessionStorageService} from "ngx-webstorage";

@Injectable()
export class ConferenceRoomService {

    constructor(
        private http: HttpClient,
        private $localStorage: LocalStorageService,
        private $sessionStorage: SessionStorageService) { }

    getBuildingData(buildingId: Number) : Observable<BuildingInfo[]>{
        return this.http.get<BuildingInfo[]>( CRRS_API_URL + 'api/buildings/' + buildingId);
    }

    getToken() {
        return this.$localStorage.retrieve('authenticationToken') || this.$sessionStorage.retrieve('authenticationToken');
    }

    postErrorReport(data: {}){
        return this.http.post( CRRS_API_URL + 'api/conference-room-schedule', data,
            {
                headers: new HttpHeaders(
                    { 'Authorization': 'Bearer ' + this.getToken(),
                               'Content-Type': 'application/json' })
            });
    };

}
