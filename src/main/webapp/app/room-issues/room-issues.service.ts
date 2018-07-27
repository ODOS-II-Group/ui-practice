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

}
