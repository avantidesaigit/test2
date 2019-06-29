import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      Authorization: 'eb28c96f28bdf0341546231ab9ddbf71f281eb7f'
    })
  };

@Injectable()
export class UnDeliverableListService {

    // tslint:disable-next-line:typedef-whitespace
    constructor(private httpClient : HttpClient) {}

    getCount(fromDate: string, toDate: string): Observable<any> {
      let params = new HttpParams();
      params = params.append('fromDate', fromDate);
      params = params.append('fromDate', toDate);

      const url = `https://api.sparkpost.com/api/v1/suppression-list?from=${fromDate}&to=${toDate}`;

      this.httpClient.get(url, httpOptions).subscribe((res) => {
      console.log(res);
  });
      return null;
}
}
