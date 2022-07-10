import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {
  }

  // getUsers(url: string) {
  //   const headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});
  //   return this.http.get(url, {headers})
  //     .pipe(
  //       map(({data}: {data: any}) => data.users),
  //       catchError(error => {
  //         return throwError(error);
  //       })
  //     );
  // }

  getUsers(url: string) {
    const headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});
    return this.http.get(url, {headers});
  }

  // createUser(url: string, params: {}) {
  //   return this.http.post(url, params)
  // }
}
