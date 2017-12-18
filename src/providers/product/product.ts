import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";

@Injectable()
export class ProductProvider {
  constructor(public http: HttpClient) {}
  getProducts(): Observable<any[]> {
    return this.http.get<any[]>(`./assets/jsonData/data.json`);
  }
}
