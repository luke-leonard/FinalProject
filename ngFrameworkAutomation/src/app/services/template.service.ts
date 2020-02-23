import { Template } from './../entities/template/template';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { AuthService } from './auth.service';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TemplateService {


  private url = environment.baseUrl + 'api/template';
  constructor(private http: HttpClient, private datepipe: DatePipe, private authSvc: AuthService) { }
  // M e t h o d s
  index(): Observable<Template[]> {
    const credentials = this.authSvc.getCredentials();
    const options = {
      headers: {
        Authorization: 'Basic ' + credentials
      }
    };
    return this.http.get<Template[]>(this.url, options).pipe(
      catchError((err: any) => {
        console.log('templateService.index(): Error retrieving list');
        console.error(err);
        return throwError(err);
      })
    );
  }
  show(id: number): Observable<Template> {
    const credentials = this.authSvc.getCredentials();
    const options = {
      headers: {
        Authorization: 'Basic ' + credentials
      }
    };
    return this.http.get<Template>(this.url + '/' + id, options).pipe(
      catchError((err: any) => {
        console.log('templateService.show(): Error retrieving single template');
        console.error(err);
        return throwError(err);
      })
    );
  }
  destroy(id: number) {
    const credentials = this.authSvc.getCredentials();
    const options = {
      headers: {
        Authorization: 'Basic ' + credentials
      }
    };
    return this.http.delete(this.url + '/' + id, options).pipe(
      catchError((err: any) => {
        console.log('templateService.destroy(): Error deleting template');
        console.error(err);
        return throwError(err);
      })
    );
  }
  create(template: Template): Observable<Template> {
    const credentials = this.authSvc.getCredentials();
    const options = {
      headers: {
        'Content-type': 'application/json',
        Authorization: 'Basic ' + credentials
      }
    };
    return this.http.post<Template>(this.url, template, options).pipe(
      catchError((err: any) => {
        console.log('templateService.create(): Error creating template');
        console.error(err);
        return throwError(err);
      })
    );
  }
  update(template: Template): Observable<Template> {
    const credentials = this.authSvc.getCredentials();
    const options = {
      headers: {
        'Content-type': 'application/json',
        Authorization: 'Basic ' + credentials
      }
    };
    return this.http.put<Template>(this.url + '/' + template.id, template, options).pipe(
      catchError((err: any) => {
        console.log('templateService.update(): Error updating template');
        console.error(err);
        return throwError(err);
      })
    );
 }

}