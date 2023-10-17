import { Injectable } from '@angular/core';
import { Iproduct } from '../Model/iproduct';
import { productsList } from '../Model/ProductList';



@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  selected:any;

  constructor() { }

  getProduct(): Iproduct[] {
    return productsList;


  }
  getProductById(productId: number): Iproduct | undefined {
    return productsList.find((product) => product.id == productId);
  }
  addNewProduct(product:any){
      productsList.push(product);
  }
  deleteProduct(productId:number){
    const index = productsList.findIndex(p => p.id === productId);
    if(index !== -1){
      productsList.splice(index,1)}}
  editProduct(product:any,productId:number){
     this.selected = productsList.find(p => p.id == productId);
     console.log(this.selected);
     
     this.selected.id = productId;
     this.selected.productName = product.productName;
     this.selected.price = product.price;
     this.selected.Description = product.Description;
     this.selected.quantity = product.quantity;
     this.selected.images = product.images;
    
    
   
  }

}
