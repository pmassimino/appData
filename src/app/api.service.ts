import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { CotizacionCereal } from './cotizacionCereal';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const apiUrl = "http://dev.coopagricolaposse.com.ar/api/cotizacionCereal/";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  getCotizacionCereal (): Observable<CotizacionCereal[]> {
    return this.http.get<CotizacionCereal[]>(apiUrl + "getall")
      .pipe(
        tap(heroes => console.log('fetched cotizacionCereal')),
        catchError(this.handleError('getcotizacionCereal', []))
      );
  }
}
