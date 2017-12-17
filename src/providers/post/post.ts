import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/delay";
import "rxjs/add/operator/take";
import "rxjs/add/observable/throw";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import { TrackerError } from "../../shared/tracker.error";

/*
  Generated class for the PostProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PostProvider {
  constructor(public http: HttpClient) {
    console.log("Hello PostProvider Provider");
  }
  getPosts(): Observable<any[] | TrackerError> {
    return this.http
      .get<any[]>(`https://jsonplaceholder.typicode.com/photos`)
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
