import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { catchError, retry } from 'rxjs/operators';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable,Subject, throwError } from 'rxjs';
import { ConfigService } from '../config.service';
import { LocalService } from '../storage/local.service';
import { ObjectType, User } from 'src/app/interfaces/User';

/** Mock client-side authentication/authorization service */
@Injectable()

export class AuthService {
  isLoggedIn$: Observable<boolean> | undefined;
  firstName$: Observable<string> | undefined;
  private firstName: Subject<string>;
  private isLoggedIn: Subject<boolean>;

 
  constructor(private http: HttpClient,private localStore:LocalService){

    this.isLoggedIn = new Subject<boolean>();
    this.isLoggedIn$ = this.isLoggedIn.asObservable();
    this.firstName = new Subject<string>();
    this.firstName$ = this.firstName.asObservable();

   
  }
  public updateLoggInStatus(isLoggedIn: boolean): void {
    
    this.isLoggedIn?.next(isLoggedIn);
    this.localStore.saveData("isLogged",isLoggedIn.toString(),ObjectType.text, false);
    
  
}

login(userName:string,password:string):Observable<any>{

  return this.http.post<any>('http://localhost:3000/auth/signin', {
    email: userName,
    password: password,
 },{headers: {
  "content-type": "application/json"}}).pipe(
    catchError((err) => {
      return throwError(err);    //Rethrow it back to component
    }));
  

}
signup(user:User):Observable<any>{

  return this.http.post<any>('http://localhost:3000/auth/signup', {
    user
 },{headers: {
  "content-type": "application/json"}}).pipe(
    catchError((err) => {
      return throwError(err);    //Rethrow it back to component
    }));
}

logout(){
  this.isLoggedIn?.next(false);
  this.localStore.saveData("isLogged","false",ObjectType.text, false);
  this.localStore.clearData();
  // Clear All Auth Cookies from Local Storage
}

recordCustomerProfile(){
  this.isLoggedIn?.next(false);
  this.localStore.saveData("isLogged","false",ObjectType.text, false);
  // Clear All Auth Cookies from Local Storage
}

}

