import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Params, Router } from '@angular/router';
import { ProductService } from 'src/app/services/productService/product.service';
import { faHome,faCheck,faStarHalf ,faStarHalfStroke,faFileCircleExclamation,faTriangleExclamation,faClose, faExpandAlt,faHeart,faShoppingBag,faStar,faStarHalfAlt,faStarAndCrescent } from '@fortawesome/free-solid-svg-icons';
import { ConfigService } from 'src/app/services/config.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  pid: any;
  pname:any;
  product:any;
  imageUrl=""
  error="";
  loading=false;
  faFileCircleExclamation =faFileCircleExclamation;
  faTriangleExclamation = faTriangleExclamation;
  faStar=faStar
  faStarHalf = faStarHalfAlt;
  faStarHalfStroke=faStarHalfStroke
  faStarAndCrescent=faStarAndCrescent
  wishItem=false;



  faCheck=faCheck;
  landingCategory:any;
  landingUrl:any;
  selectedColor:any;
  selectedSize:any;


  constructor(private route: ActivatedRoute,private router: Router, private productService:ProductService, private config:ConfigService) { }

  onChangeColor(e:any){
    this.selectedColor= e.target.value;
  }
  onChangeSize(e:any){
    this.selectedSize= e.target.value;
  }
  ngOnInit(): void {

    
    // this.pid = this.route.snapshot.paramMap.get('id')
    // this.pname = this.route.snapshot.paramMap.get('name')
    this.loading=true;
    this.imageUrl = this.config.config.imageCloudfrontURL
    this.landingUrl = this.router.url;
    console.log('curent url',this.router.url);

    this.route.queryParams
    .subscribe(params => {
      console.log(params); // { orderby: "price" }
      this.landingCategory = params['cat'].split('/');
      console.log('landing ', this.landingCategory.length); // price
    }
  );

    this.route.paramMap.subscribe((params: ParamMap) => {
      console.log(params);

      this.pid = params.get('id')
      this.pname = params.get('name')
      
      
    

       
    this.productService.getProductsById(this.pid).subscribe(pdata=>{

      
      
      this.selectedColor = pdata.color;
      this.selectedSize = pdata.size;

      console.log(pdata)
      console.log();
      pdata.additional_image_urls.unshift(pdata.image_url);
    
      this.product = pdata;
      this.loading=false;



    },(error) => {
      this.loading=false;
      //console.log(error);
      this.error="Error at Server, Please try again in sometime"
    });



    })
  }

  wishlist(pid:any)
  {

    if(this.wishItem){
      this.wishItem = false;
    }
    else{
    this.wishItem=true;
    }


    
console.log(pid);

  }
  over(image:any){

    console.log(image);

    (document.getElementById('main-image') as HTMLImageElement).src = this.imageUrl+image+'?d=1000x1500';

    console.log('done');


  }
}

