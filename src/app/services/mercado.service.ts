import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Mercado} from "../models/cotizacionCereal";

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json','Access-Control-Allow-Origin': '*' }),
  crossdDomain:true
};
const apiUrl = "http://dev.coopmontemaiz.com.ar/api/cotizacionCereal/";
let headers = new HttpHeaders({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' });
let options = { headers: headers, crossDomain: true, withCredentials: false };

@Injectable({
  providedIn: 'root'
})
export class MercadoService {

  constructor(private http: HttpClient) { }
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  getAll (): Observable<Mercado[]> {
    return this.http.get<Mercado[]>(apiUrl + "getall",httpOptions)
      .pipe(
        tap(Mercado => console.log('fetched mercado')),
        catchError(this.handleError('getall', []))
      );
  }
}
