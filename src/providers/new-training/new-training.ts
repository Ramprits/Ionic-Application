import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the NewTrainingProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class NewTrainingProvider {
  private Root_Url = "http://localhost:5000/api/newTrainings";
  constructor(public http: HttpClient) {
    console.log('Hello NewTrainingProvider Provider');
  }
  getNewTrainings(): Observable<any[]> {
    return this.http.get<any[]>(this.Root_Url);
  }
  addNewTraining(newTraining): Observable<any> {
    return this.http.post<any>(this.Root_Url, newTraining);
  }
}
