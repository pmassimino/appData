import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { cotizacionCereal } from './cotizacionCereal';

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
  getCotizacionCereal (): Observable<cotizacionCereal[]> {
    return this.http.get<cotizacionCereal[]>(apiUrl + "getall",httpOptions)
      .pipe(
        tap(heroes => console.log('fetched cotizacionCereal')),
        catchError(this.handleError('getcotizacionCereal', []))
      );
  }
  insert(cotizacion:cotizacionCereal):Observable<cotizacionCereal>
  {
return this.http.post<cotizacionCereal>(apiUrl +"insert",JSON.stringify(cotizacion),httpOptions )
.pipe(
 tap(result=>console.log('insert ok')
,catchError(this.handleError('insert fail',[]))));
  }
  getPizarraCereal (id:string): Observable<cotizacionCereal[]> {
    return this.http.get<cotizacionCereal[]>(apiUrl + "pizarra/" + id  ,httpOptions)
      .pipe(
        tap(heroes => console.log('fetched cotizacionCereal')),
        catchError(this.handleError('getcotizacionCereal', []))
      );
  }

}

