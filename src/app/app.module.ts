import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {RouterModule} from '@angular/router';
import {AppComponent} from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { SearchComponent } from './search/search.component';
import { FooterComponent } from './footer/footer.component';
import { ProductService } from './shared/product.service';
import {FormsModule} from "@angular/forms";
import { ProductItemComponent } from './product-item/product-item.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ProductDetailComponent,
    SearchComponent,
    FooterComponent,
    ProductItemComponent,
  ],
  imports: [
    BrowserModule
    , FormsModule
    , BrowserModule
    , RouterModule.forRoot([
      {path: '',                    component: HomeComponent},
      {path: 'products/:productId', component: ProductDetailComponent}
    ])
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
