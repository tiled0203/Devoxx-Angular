import {Component, Inject, OnInit, ViewEncapsulation} from '@angular/core';
import {Product} from "../shared/product";
import {ProductService} from "../shared/product.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
  encapsulation: ViewEncapsulation.None,
  providers: [ProductService]
})
export class HomeComponent implements OnInit {

  products: Product[]=[];
  constructor(private productService: ProductService) { }

  ngOnInit() {
    // this.getProducts();
    this.productService.getProducts().then( x => this.products = x);
  }

  getProducts() {
    // this.loading = true;
    // this.productService.getProducts().then( () => this.loading = false);
  }
}
