import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface Config {

  contentServiceUrl: string;
  authorizationHeader: string;
  apiToken:string;
  imageCloudfrontURL:string;
  productServiceUrl:string;
}

@Injectable({
  providedIn: 'root'
})

export class ConfigService {

  public config: Config = {
    contentServiceUrl: '',
    authorizationHeader: '',
    apiToken:'',
    imageCloudfrontURL:'',
    productServiceUrl:''

};

  constructor(private http:HttpClient) {
  }

   loadConfig() {
    return this.http
      .get<Config>('./assets/config/config.json')
      .toPromise()
      .then(config => {
        this.config= config!;
        ////console.log("Config Loaded");
        ////console.log(this.config.contentServiceUrl);
        ////console.log(this.config.authorizationHeader);
        config
        
        
      });
  }


}