import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { CivileModel } from '../models/civile.model';
import { environment } from 'src/environments/environment';


const baseUrl = environment.baseUrl ;
@Injectable({
    providedIn: 'root',
})
export class CiviliteService {
    baseUrl = environment.baseUrl ;
    constructor(private httpClient: HttpClient) {
    }

    getCivils(): Observable<CivileModel[]> {
        return this.httpClient.get<CivileModel[]>(`${this.baseUrl}/Civilite/civilites`);
    }

    private handleError(errorResponse: HttpErrorResponse) {
        if (errorResponse.error instanceof ErrorEvent) {
            console.error('Client Side Error :', errorResponse.error.message);
        } else {
            console.error('Server Side Error :', errorResponse);
        }
        return throwError('There is a problem with the service. We are notified & working on it. Please try again later.');
    }

    getCivil(id: number): Observable<CivileModel> {
        console.log("################# id" + id);
        return this.httpClient.get<CivileModel>(`${this.baseUrl}/Civilite/civilite/${id}`)
            .pipe(catchError(this.handleError))
    }

    addCivil(civil: CivileModel): Observable<CivileModel> {
        return this.httpClient.post<CivileModel>(this.baseUrl+'/Civilite/civilite', civil, {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        })
        .pipe(catchError(this.handleError));
    }

    updateCivil(civil: CivileModel): Observable<void> {
        return this.httpClient.put<void>(`${this.baseUrl}/Civilite/update`, civil, {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        })
            .pipe(catchError(this.handleError));
    }

    deleteCivil(id: number): Observable<void> {
        return this.httpClient.delete<void>(`${this.baseUrl}/Civilite/delete/${id}`)
            .pipe(catchError(this.handleError));
    }
}