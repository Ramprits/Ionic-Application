import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class NewTrainingProvider {
  private Root_Url = "http://localhost:5000/api/newTrainings";
  constructor(public http: HttpClient) {
  }
  getNewTrainings(): Observable<any[]> {
    return this.http.get<any[]>(this.Root_Url);
  }
  addNewTraining(newTraining): Observable<any> {
    return this.http.post<any>(`http://localhost:5000/api/newTrainings`, newTraining);
  }

  getTechnologies(): Observable<any[]> {
    return this.http.get<any[]>(`http://localhost:5000/api/technologies`);
  }
}
