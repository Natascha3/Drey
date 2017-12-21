import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

/*
  Generated class for the ListProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ListProvider {

  constructor(private http: HttpClient) {
    console.log('Hello ListProvider Provider');
  }

  /*getList(): Observable<any> {

    return this.http.get('http://localhost:8081/api/list/all')
      .map(res => res.json());
  }

  private extractData(res: Response) {
    return res.json || {};
  }*/

  getList() {
    return new Promise(resolve => {
      this.http.get('http://localhost:8082/api/list/all').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

}
