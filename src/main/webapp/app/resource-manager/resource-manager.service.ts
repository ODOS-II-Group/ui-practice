import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { LocalStorageService, SessionStorageService} from 'ngx-webstorage';

import { CRRS_API_URL } from '../app.constants';

@Injectable()
export class ResourceManagerService {

  constructor(
    private http: HttpClient,
    private $localStorage: LocalStorageService,
    private $sessionStorage: SessionStorageService) { }

  getAllBuildingData(){
    return this.http.get(CRRS_API_URL + 'api/buildings');
  }
  getAllConferenceData(){
    return this.http.get(CRRS_API_URL + 'api/conferenceroom');
  }
  updateFoodSpace(foodSpace, id){
      const data= {"id": id, "foodSpace": foodSpace};
      return this.http.put(CRRS_API_URL + '/api/conferenceroom', data, {
          headers: new HttpHeaders(
              { 'Authorization': 'Bearer ' + this.getToken(),
                        'Content-Type': 'application/json' })
      });
  }
  getAllEquipmentData(){
    return this.http.get(CRRS_API_URL + 'api/equipment',  {
      headers: new HttpHeaders(
          { 'Authorization': 'Bearer ' + this.getToken(),
                     'Content-Type': 'application/json' })
    });
  }

  getToken() {
    return this.$localStorage.retrieve('authenticationToken') || this.$sessionStorage.retrieve('authenticationToken');
  }
}
