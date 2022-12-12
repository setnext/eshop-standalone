<div class="container bg-white"> 
    <div class="row">
        <div *ngFor="let productItem of productList; index as i;" class="col-lg-3 col-sm-6 d-flex flex-column align-items-center justify-content-center product-item my-3">
            <div class="product"> <img src="{{productItem.imageUrl}}" alt="">
                <ul class="d-flex align-items-center justify-content-center list-unstyled icons">
                    <li class="icon">
                        <fa-icon [icon]="faExpandAlt"></fa-icon>
                    </li>
                    <li class="icon mx-3">
                        <fa-icon [icon]="faHeart"></fa-icon>
                    </li>
                    <li class="icon">
                        <fa-icon [icon]="faShoppingBag"></fa-icon>
                    </li>
                </ul>
            </div>
            <div class="tag bg-red">sale</div>
            <div class="title pt-4 pb-1">{{productItem.pname}}</div>
            <div class="d-flex align-content-center justify-content-center">
                 <fa-icon *ngIf="productItem.starRating<0"  [icon]="faStar"></fa-icon>
                 <fa-icon *ngIf="productItem.starRating<1"  [icon]="faStar"></fa-icon>
                 <fa-icon *ngIf="productItem.starRating<2"  [icon]="faStar"></fa-icon>
                 <fa-icon *ngIf="productItem.starRating<3"  [icon]="faStar"></fa-icon>
                 <fa-icon *ngIf="productItem.starRating<4"  [icon]="faStarHalf"></fa-icon>
                 </div>
            <div class="price">{{productItem.pname}}</div>
        </div>
   
</div>


https://www.codehim.com/demo/bootstrap-ecommerce-product-list-with-navbar-hover/