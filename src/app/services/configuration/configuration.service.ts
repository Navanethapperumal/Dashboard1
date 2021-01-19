import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ConfigurationModel } from '../../Models/configuration-model';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {


  _url = 'http://localhost:3000/enroll';
  constructor(private _http: HttpClient) { }

  save (config: ConfigurationModel) {
    console.log(config);
    //return this._http.post<any>(this._url, config).pipe(catchError(this.errorHandler))
    //return true
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(error)
  }
}
