import { ProductsService } from 'src/app/Services/ProductsService';
import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit  {

  id:any='';
  productName:any='';
  Description:string='';
  price:any='';
  quantity:any='';
  images:string='';
  productId: any;
  oneProduct:any={};
  /**
   *
   */
  constructor(public productService:ProductsService , public router:Router,public activatedRoute: ActivatedRoute
    ) {
  
    
  }
  // ngOnInit(): void {
    
  // }
  ngOnInit(): void {
    this.productId = this.activatedRoute.snapshot.params['id'];
    this.oneProduct=this.productService.getProductById(this.productId);
    if(this.productId != 0)
    {this.productName=this.oneProduct.productName;
      this.price=this.oneProduct.price;
      this.quantity=this.oneProduct.quantity;
      this.id=this.oneProduct.id;
      this.Description=this.oneProduct.Description;
      this.images=this.oneProduct.images;
    }
  }

 




  formOperation(e:any){
    e.preventDefault();
    let newProduct = {
      productName: this.productName,
      Description:this.Description,
      price: this.price,
      quantity: this.quantity,
     
      id: this.id,
      images: this.images

  }
          //  this.productService.addNewProduct(newProduct);
          //  this.router.navigate(['/products']);
          let updateProduct = {
            productName: this.productName,
            price: this.price,
            quantity: this.quantity,
            Description: this.Description,
            id: this.id,
            images: this.images



          };
      if(this.productId ==0){this.productService.addNewProduct(newProduct);
        this.router.navigate(['/products']);
          
      }
      else{this.productService.editProduct(updateProduct,this.productId);
        this.router.navigate(['/products']);
      }
      

    
  }
  
}
