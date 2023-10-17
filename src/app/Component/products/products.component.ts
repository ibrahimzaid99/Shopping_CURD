import { Component, OnInit } from '@angular/core';
import { Iproduct } from 'src/app/Model/iproduct';
import { ProductsService } from 'src/app/Services/ProductsService';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Iproduct[] =[];

constructor(public proudctService:ProductsService) {
   
  

}

  ngOnInit(): void {
    this.products = this.proudctService.getProduct();
   

}
deleteProduct(productId:any){
  this.proudctService.deleteProduct(productId);

}
}