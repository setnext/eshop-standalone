import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, retry, timeout } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { ConfigService } from "../config.service";



@Injectable({
    providedIn: 'root'
  })
  export class ProductService {

    productServiceUrl = '';


    constructor(private http: HttpClient, private config:ConfigService) { 
      this.productServiceUrl = config.config.productServiceUrl;
    }


    getProductsByCategory(category:string,page:number,size:number ):Observable<any>{

        let params = new HttpParams();
        params = params.append('page', page);
        params = params.append('size', size);

        return this.http.get<any>(this.productServiceUrl+ '/products/categories'+ category,{params: params}).pipe(
          catchError((err) => {
            //console.log(err);
            return throwError(err);    //Rethrow it back to component
          }));
        
      
      }

      getProductsById(id:string):Observable<any>{

        return this.http.get<any>(this.productServiceUrl+'/products/'+ id).pipe(
          catchError((err) => {
            //console.log(err);
            return throwError(err);    //Rethrow it back to component
          }));
        
      
      }
  


}