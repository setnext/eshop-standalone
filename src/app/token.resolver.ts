// import { HttpClient } from "@angular/common/http";
// import { Injectable } from "@angular/core";
// import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
// import { async, Observable } from "rxjs";
// import { AuthService } from "./auth.service";

// @Injectable({ providedIn: 'root' })
// export class TokenResolver implements Resolve<any> {
//   constructor(private auth: AuthService, private http:HttpClient) {}

//   resolve(
//     route: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot
//   ): Observable<any>|Promise<any>|undefined {
//     return this.requestDataAndWait();
//   }
//   async requestDataAndWait() {
//     let httpData = await this.auth.getCMSAuthToken();  
//     return httpData;
// }
// }
