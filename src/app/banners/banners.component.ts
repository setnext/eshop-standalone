import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/authService/auth.service';
import { ConfigService } from '../services/config.service';

@Component({
  selector: 'app-banners',
  templateUrl: './banners.component.html',
  styleUrls: ['./banners.component.css']
})
export class BannersComponent implements OnInit {
  banners:any=[];
  smbanners:any=[];
  
  cmsOrigin:string=""
  loading = false;
  total = 0;
  total1 = 0;

  constructor(private auth:AuthService, private http: HttpClient, private conf:ConfigService) { }

  ngOnInit(){
    this.loading=true;
    
    const token = this.conf.config.authorizationHeader;
    this.cmsOrigin = this.conf.config.contentServiceUrl;
  
    

     var imgArray =[];   
    this.http.get<any>(this.cmsOrigin+'/api/banners?populate=*').subscribe(data => {
        ////console.log("banner received");
        
        this.banners = data;
        this.loading=false;

        
        // ////console.log(data.data[0].attributes.image.data.attributes.formats.large.url);
       
    });

    this.http.get<any>(this.cmsOrigin+'/api/banner-sms?populate=*').subscribe(data1 => {
        ////console.log("banner-sm data received");
        this.smbanners = data1.data;
        this.loading=false;
        // ////console.log(data1.data);
        // ////console.log(this.smbanners[0].attributes.image.data.attributes.formats.small.url);
        // // this.smbanners.array.forEach((element: any) => {
        //   ////console.log(element);
        // });
    });

    

    // for (let i = 0; banners.length -1; i++) {
    //   ////console.log(banners[0].Image.large.url);
    // }
   
 
    

  }

}
