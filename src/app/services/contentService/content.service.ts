import { Injectable, SkipSelf } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';


import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { HttpErrorHandler, HandleError } from '../http-error-handler.service';
import { Banner } from './banner';
import { AuthService } from '../authService/auth.service';



@Injectable()
export class ContentService {
  bannerUrl = 'api/heroes';  // URL to web api
  private handleError: HandleError;
}
