import { MemberType } from './../models/member-type.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

//const baseUrl = environment.baseUrl+'/memberType' ;
const baseUrl = environment.baseUrl+'/api/v1' ;

@Injectable({
  providedIn: 'root'
})
export class MemberTypeService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<MemberType[]> {
   // return this.http.get<MemberType[]>(`${baseUrl}`);
     return this.http.get<MemberType[]>(`${baseUrl}/getAllMembreType`);
  }

  get(id: any): Observable<MemberType> {
   // return this.http.get(`${baseUrl}/${id}`);
    return this.http.get(`${baseUrl}/findMembreType/${id}`);
  }
  
  create(data: any): Observable<any> {
    //return this.http.post(`${baseUrl}`, data);
      return this.http.post(`${baseUrl}/addMembreType`, data);
  }

  update(id: any, data: any): Observable<any> {
   // return this.http.put(`${baseUrl}/${id}`, data);
        return this.http.put(`${baseUrl}/updateMembreType/${id}`, data);
  }

  delete(id: any): Observable<any> {
    //return this.http.delete(`${baseUrl}/${id}`);
     return this.http.delete(`${baseUrl}/deleteMembreType/${id}`);
  }

}
