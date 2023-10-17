import { ProductsService } from 'src/app/Services/ProductsService';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  productId:any;
 products:any;
  constructor(public activatedRoute:ActivatedRoute,public productsService :ProductsService) {
    
    
  }
  ngOnInit(): void {
    this.productId=this.activatedRoute.snapshot.params['id'];
            this.products = this.productsService.getProductById(this.productId);

  }

}
