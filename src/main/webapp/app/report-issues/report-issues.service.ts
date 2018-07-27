import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CRRS_API_URL } from '../app.constants';
import { LocalStorageService, SessionStorageService} from 'ngx-webstorage';


@Injectable()
export class ResportIssuesService {

  constructor(
      private http: HttpClient,
      private $localStorage: LocalStorageService,
      private $sessionStorage: SessionStorageService
    ) { }

}
