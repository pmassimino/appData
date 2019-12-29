import { Component, Input, APP_INITIALIZER } from '@angular/core';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import {config} from '../models/config'


@Injectable()
export class ConfigService{

private _configURL = 'assets/config.json';
public data;
constructor(private http: HttpClient) {
  
}

public load() {
  //return this.http.get<config>('assets/config.json').subscribe(data => this.data = data);
  return this.http
    .get('assets/config.json')
    .toPromise()
    .then(data => {
     this.data = data;
   });
}
}

