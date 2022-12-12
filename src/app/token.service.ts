// import { Injectable,Injector } from '@angular/core';
// import {HttpClient} from '@angular/common/http';
// import { catchError, retry, tap } from 'rxjs/operators';
// import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
// import { Observable, throwError } from 'rxjs';

// export interface CMSToken {
//   data:Data
// }
// export interface Data {

//   token: string;
//   user: string;
// }

// /** Mock client-side authentication/authorization service */
// @Injectable()
// export class TokenService {

//   public cmsAuthToken = "";

//   // private cmsTokenData: CMSToken =[];

//   // //   cmsUrl = 'http://localhost:1337/admin/login';
//   // //   data = {
//   // //     email: 'cms@setnext.io',
//   // //     password: 'Muruga@321',
//   // //  };
//   // //  options = {headers: {
//   // //   "content-type": "application/json",
//   // // }};
  
//   constructor(private http: HttpClient){}

//   // setCMSToken(): () => Observable<any> {
//   //   return () => this.http.post("http://localhost:1337/admin/login",{
//   //    email: 'cms@setnext.io',
//   //    password: 'Muruga@321',
//   //  },{headers: {
//   //    "content-type": "application/json",
//   //  }})
//   //     .pipe(
//   //        tap(result => {

//   //         var data = result as CMSToken;
//   //         ////console.log(data.data.token)
//   //         this.cmsAuthToken = data.data.token;

//   //        })
//   //     );
//   //  }
  
//   // // getCMSAuthToken():Promise<CMSToken> {
//   // //   return this.http.post<CMSToken>(this.cmsUrl,this.data,this.options)
//   // //   .pipe(
//   // //     tap(user => { ... })
//   // //  );
   

    
//   // // }

  
// }

