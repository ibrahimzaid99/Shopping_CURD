import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Component/home/home.component';
import { ProductsComponent } from './Component/products/products.component';
import { NotFoundComponent } from './Component/not-found/not-found.component';
import { ProductDetailsComponent } from './Component/product-details/product-details.component';
import { AddproductComponent } from './Component/addproduct/addproduct.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  { path: 'home', redirectTo: '/', pathMatch: 'full' },
  {path:'products' , component:ProductsComponent},
  {path:'products/:id' , component:ProductDetailsComponent},
  {path:'products/:id/edit' , component:AddproductComponent},

 
  {path:'**',component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
