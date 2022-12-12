import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';

import { AuthService } from '../services/authService/auth.service';
import { ConfigService } from '../services/config.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  data :any
  cmsToken:string=""
  constructor(private conf:ConfigService) {}

  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    
   
       

     if (req.url.includes("/auth")){
      
      const apiToken = this.conf.config.apiToken;
     
      req = req.clone({ setHeaders: { 'x-api-key': apiToken } });

     }
     else
     {
     
      const cmsToken = this.conf.config.authorizationHeader;
      

     req = req.clone({ setHeaders: { Authorization: cmsToken } });
     }

    // send cloned request with header to the next handler.
    return next.handle(req);
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/