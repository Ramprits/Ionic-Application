import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import { TrackerError } from "../../shared/tracker.error";

@Injectable()
export class ProductProvider {
  constructor(public http: HttpClient) {
    console.log("Hello ProductProvider Provider");
  }
  getProducts(): Observable<any[] | TrackerError> {
    return this.http
      .get<any[]>(`./assets/jsonData/data.json`)
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
