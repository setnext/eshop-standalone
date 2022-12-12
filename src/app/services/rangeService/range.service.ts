import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, retry, timeout } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';


@Injectable({
    providedIn: 'root'
  })
  export class RangeService {


    constructor(private http: HttpClient) {}


    getSubCategoriesByCategory(category:string):Observable<any>{


        return this.http.get<any>('http://localhost:8075/api/v1/range/categories'+ category).pipe(
          catchError((err) => {
            //console.log(err);
            return throwError(err);    //Rethrow it back to component
          }));
        
      
      }
    
}