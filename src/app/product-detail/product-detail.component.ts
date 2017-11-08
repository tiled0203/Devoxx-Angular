import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Product} from "../shared/product";
import {ActivatedRoute} from "@angular/router";
import {ProductService} from "../shared/product.service";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.sass'],
  encapsulation: ViewEncapsulation.None
})
export class ProductDetailComponent implements OnInit {

  product: Product;

  constructor(private route: ActivatedRoute, private productService: ProductService) {}

  ngOnInit() {
    let prodId: number = parseInt(this.route.snapshot.params['productId']);
    this.product = this.productService.getProductById(prodId);
  }

}
