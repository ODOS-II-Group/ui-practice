import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { LocalStorageService, SessionStorageService} from 'ngx-webstorage';

import { CRRS_API_URL } from '../app.constants';

@Injectable()
export class RoomIssuesService {

    constructor(
        private http: HttpClient,
        private $localStorage: LocalStorageService,
        private $sessionStorage: SessionStorageService) { }


        getAllIssues(){
            return this.http.get(CRRS_API_URL + "api/room-equipment-issues");
        }

        updateAnIssue(data){
           const headers = {
                headers: new HttpHeaders(
                    { 'Authorization': 'Bearer ' + this.getToken(),
                               'Content-Type': 'application/json' })
            };

           return this.http.put(CRRS_API_URL + "api/room-equipment-issues", data, headers);
        }

        getToken() {
            return this.$localStorage.retrieve('authenticationToken') || this.$sessionStorage.retrieve('authenticationToken');
        }

}
