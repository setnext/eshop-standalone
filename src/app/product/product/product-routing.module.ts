import { NgModule, OnInit } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductComponent } from './product.component';
import { ProductlistComponent } from '../productlist/productlist.component';
import { ProductDetailComponent } from '../product-detail/product-detail.component';


const routes: Routes = [
    {path:'dp/:name/:id', component:ProductDetailComponent},
    {
        
        path: 'products/fashion',
        component: ProductComponent,
        children: [
            {path: '', component: ProductlistComponent},
            {path: 'women', component: ProductlistComponent},
            {path: 'men', component: ProductlistComponent},
            {path: 'boys', component: ProductlistComponent},
            {path: 'girls', component: ProductlistComponent},
            {path: 'cosmetics', component: ProductlistComponent},
            {path: '**', redirectTo: ''}
          
          ]
    },
    {
        
        path: 'products/electronics',
        component: ProductComponent,
        children: [
            {path: '', component: ProductlistComponent},
            {path: 'mobiles', component: ProductlistComponent},
            {path: 'laptops', component: ProductlistComponent},
            {path: 'home-entertainment', component: ProductlistComponent},
            {path: 'audio', component: ProductlistComponent},
            {path: 'cameras', component: ProductlistComponent},
            {path: '', redirectTo: 'all', pathMatch: 'full' }
          
          ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class ProductRoutingModule implements OnInit {

    ngOnInit(): void {
        console.log("product routing onInt");
        
    }
   }