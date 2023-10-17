import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './Component/products/products.component';
import { HomeComponent } from './Component/home/home.component';
import { NavbarComponent } from './Component/navbar/navbar.component';
import { FooterComponent } from './Component/footer/footer.component';

import { NotFoundComponent } from './Component/not-found/not-found.component';
import { AddproductComponent } from './Component/addproduct/addproduct.component';
import { ProductDetailsComponent } from './Component/product-details/product-details.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    HomeComponent,
    AddproductComponent,
    NavbarComponent,
    FooterComponent,
   
    NotFoundComponent,
        ProductDetailsComponent,
        
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
