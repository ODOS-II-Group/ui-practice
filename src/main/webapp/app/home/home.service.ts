import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { CRRS_API_URL } from '../app.constants';
import { BuildingInfo } from './home.model';

@Injectable()
export class HomeService {

  constructor(private http: HttpClient) { }

  getAllBuildingData(){
      return this.http.get<BuildingInfo[]>(CRRS_API_URL + 'api/buildings');
  }
}
