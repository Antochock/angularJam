import { Observable } from 'rxjs';
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Params } from '@angular/router';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  endPoint = environment.api;

  constructor(private http: HttpClient) { }


  get<T>(url:string, params?:Params): Observable<T>{
    if(!environment.production){
      console.log(`GET from ${this.endPoint}/${url}:`, params);
    }
    return this.http.get<T>(`${this.endPoint}/${url}`, {params}).pipe(
      tap( data => {
        if(!environment.production){
          console.log(`Get result: `, data);
        }
      }))
  }

  post<T>(url:string, data:any, params?: Params): Observable<T>{
    if(!environment.production){
      console.log(`Post to ${this.endPoint}/${url}:`, data);
    }
    return this.http.post<T>(`${this.endPoint}/${url}`, data, {params}).pipe(
      tap( res => {
        if(!environment.production){
          console.log(`Post result: `, res);
        }
      }))
  }

  put<T>(url:string, id:string, data:any, params?: Params): Observable<T>{
    if(!environment.production){
      console.log(`Put to ${this.endPoint}/${url}//${id}`, data);
    }
    return this.http.put<T>(`${this.endPoint}/${url}//${id}`, data, {params}).pipe(
      tap( res => {
        if(!environment.production){
          console.log(`Put result: `, res);
        }
      }))
  }

  delete<T>(url:string, id:string): Observable<T>{
    if(!environment.production){
      console.log(`Delete from ${this.endPoint}/${url}/${id}:`);
    }
    return this.http.delete<T>(`${this.endPoint}/${url}/${id}`).pipe(
      tap( res => {
        if(!environment.production){
          console.log(`Delete result: `, res);
        }
      }))
  }
}
