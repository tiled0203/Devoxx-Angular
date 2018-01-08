import {ProductService} from "../shared/product.service";
import {expect,sinon,assert} from '../../spec-bundle';
import {ProductDetailComponent} from "./product-detail.component";
import {ActivatedRoute} from "@angular/router";



describe('App Component Test',() => {
  let comp = null;
  beforeEach(() => {
    let productService = new ProductService();
    let activatedRoute = new ActivatedRoute();
    sinon.stub(productService, 'getProductById').returns(Promise.resolve({
      add: 'amount',
      message: 'you added'
    }));
    comp = new ProductDetailComponent(activatedRoute, productService);
  });

  it('Promise Array',()=>{
    let product = comp.getProductById(1);

    expect(product).to.be({
      add: 'amount',
      message: 'you added'
    });

  });
});

