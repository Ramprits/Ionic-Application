import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Campaign, ICampaignResponse } from '../../shared/Models/campaign.model';

@Injectable()
export class CampaignProvider {

  constructor(public http: HttpClient) {
  }
  getCampaign(): Observable<Campaign[]> {
    return this.http.get<Campaign[]>(`http://localhost:5000/api/campaign`).
      map((campaign: Campaign[]) => {
        return campaign;
      });
  }
  insertCampaign(campaign: Campaign): Observable<Campaign> {
    return this.http
      .post<ICampaignResponse>(`http://localhost:5000/api/campaign`, campaign)
      .map(data => {
        if (data) {
          return data.campaign;
        }
      });
  }
}
