import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import { ITraining } from '../../shared/Models/training.model';

@Injectable()
export class TrainingProvider {
  constructor(public http: HttpClient) {
  }
  getTrainings(): Observable<ITraining[]> {
    return this.http
      .get<ITraining[]>(`./assets/jsonData/Training.json`);
  }

}
