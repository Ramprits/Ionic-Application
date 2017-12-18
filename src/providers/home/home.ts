import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { TrackerError } from "../../shared/tracker.error";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/delay";
import "rxjs/add/observable/throw";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";

@Injectable()
export class HomeProvider {
  constructor(public httpClient: HttpClient) {
    console.log("Hello HomeProvider Provider");
  }
  getCategories(): Observable<any[] | TrackerError> {
    return this.httpClient
      .get<any[]>(`http://localhost:5000/api/Categories`)
      .map((category: any[]) => {
        return category;
      })
      .catch(this.handleError);
  }
  private handleError(error: HttpErrorResponse): Observable<TrackerError> {
    const dataError = new TrackerError();
    dataError.errorNumber = error.status;
    dataError.message = error.statusText;
    dataError.friendlyMessage = "An error occurred retrieving data.";
    return Observable.throw(dataError);
  }
}
