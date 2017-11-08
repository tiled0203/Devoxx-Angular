import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {Product} from "../shared/product";

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.sass'],
  encapsulation: ViewEncapsulation.None
})
export class ProductItemComponent{

  @Input() product: Product;
}

