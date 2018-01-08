import { Injectable } from '@angular/core';
import {Product} from "./product";

export const PRODUCTS: Product [] = [
  {
    "id": 0,
    "title": "First Product",
    "price": 24.99,
    "rating": 4.3,
    "shortDescription": "This is a short description of the First Product",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "categories": ["electronics", "hardware"]
  },
  {
    "id": 1,
    "title": "Second Product",
    "price": 64.99,
    "rating": 3.5,
    "shortDescription": "This is a short description of the Second Product",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "categories": ["books"]
  },
  {
    "id": 2,
    "title": "Third Product",
    "price": 74.99,
    "rating": 4.2,
    "shortDescription": "This is a short description of the Third Product",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "categories": ["electronics"]
  },
  {
    "id": 3,
    "title": "Fourth Product",
    "price": 84.99,
    "rating": 3.9,
    "shortDescription": "This is a short description of the Fourth Product",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "categories": ["hardware"]
  },
  {
    "id": 4,
    "title": "Fifth Product",
    "price": 94.99,
    "rating": 5,
    "shortDescription": "This is a short description of the Fifth Product",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "categories": ["electronics", "hardware"]
  },
  {
    "id": 5,
    "title": "Sixth Product",
    "price": 54.99,
    "rating": 4.6,
    "shortDescription": "This is a short description of the Sixth Product",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "categories": ["books"]
  }
];


@Injectable()
export class ProductService {
  results : [] = [];
  loading: boolean;

  getProducts() {
    // let promise = new Promise((resolve, reject) => {
    //   resolve(PRODUCTS);
    // });
    //
    // promise.then(
    //   res => { // Success
    //     this.results = res.map(item => {
    //       return new Product(
    //         item.id,
    //         item.title,
    //         item.price,
    //         item.rating,
    //         item.shortDescription,
    //         item.description,
    //         item.categories
    //       );
    //     });
    //   });
    // return promise;
    return Promise.resolve(PRODUCTS);
  }

  getProductById(productId: number): Product {
    return PRODUCTS.find(p => p.id === productId);
  }
}
