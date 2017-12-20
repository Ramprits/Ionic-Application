import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class CampaignProvider {

  constructor(public http: HttpClient) {
   }
  getCampaign(): Observable<any[]> {
    return this.http.get<any[]>(`http://localhost:5000/api/campaign`).
        map((campaign: any[]) => {
        return campaign;
      });
  }
}
