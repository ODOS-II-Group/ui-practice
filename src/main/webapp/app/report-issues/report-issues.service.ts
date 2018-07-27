import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CRRS_API_URL } from '../app.constants';
import { LocalStorageService, SessionStorageService} from 'ngx-webstorage';


@Injectable()
export class ReportIssuesService {

  constructor(
      private http: HttpClient,
      private $localStorage: LocalStorageService,
      private $sessionStorage: SessionStorageService
    ) { }

    postReportIssuesData(data: {}){
        return this.http.post( CRRS_API_URL + 'api/room-equipment-issues', data,
            {
                headers: new HttpHeaders(
                    { 'Authorization': 'Bearer ' + this.getToken(),
                               'Content-Type': 'application/json' })
            });
      };

      getToken() {
        return this.$localStorage.retrieve('authenticationToken') || this.$sessionStorage.retrieve('authenticationToken');
    }
}
