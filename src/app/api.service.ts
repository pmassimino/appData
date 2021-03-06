import { Injectable } from '@angular/core';
import { Observable, of, throwError, config } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError,retry, tap, map } from 'rxjs/operators';
import { cotizacionCereal } from './cotizacionCereal';
import {ConfigService} from './services/config.service';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json','Access-Control-Allow-Origin': '*' }),
  crossdDomain:true
};

let headers = new HttpHeaders({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*','Access-Control-Allow-Methods' : 'GET, POST, PUT, DELETE' });
let options = { headers: headers, crossDomain: true, withCredentials: false };
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  
  constructor(private http: HttpClient,private config:ConfigService) 
  {
  
   }
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  getCotizacionCereal (): Observable<cotizacionCereal[]> {     
       
    return this.http.get<cotizacionCereal[]>(this.config.data.apiUrl + "cotizacionCereal" + "/getall",httpOptions)
      .pipe(
        tap(heroes => console.log('fetched cotizacionCereal')),
        catchError(this.handleError('getcotizacionCereal', []))
      );
  }
  insert(cotizacion:cotizacionCereal):Observable<any>
  {    
    return this.http.post<cotizacionCereal>(this.config.data.apiUrl + "cotizacionCereal" + "/insert",JSON.stringify(cotizacion),httpOptions )
      .pipe(catchError(this.handleError('insert fail',[])));
  }
  getPizarraCereal (id:string): Observable<cotizacionCereal[]> {
    return this.http.get<cotizacionCereal[]>(this.config.data.apiUrl + "cotizacionCereal" + "/pizarra/" + id  ,httpOptions)
      .pipe(
        tap(heroes => console.log('fetched cotizacionCereal')),
        catchError(this.handleError('getcotizacionCereal', []))
      );
  }

}

