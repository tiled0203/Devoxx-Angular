import {ProductService} from "../shared/product.service";
import {expect,sinon,assert} from '../../spec-bundle';
import {HomeComponent} from "./home.component";

describe('App Component Test', () => {
  let comp: HomeComponent;

  beforeEach(() => {
    let productService = new ProductService();
    sinon.stub(productService, 'getProducts').returns(Promise.resolve([{
      add: 'amount',
      message: 'you added'
    }, {
      add: '2',
      message: 'you added'
    }]));
    comp = new HomeComponent(productService);
  });

  it('should return a promise', function (done) {
    // comp.getProducts((promise) => {
    //   assert.isArray(promise);
    //   expect(promise).to.have.lengthOf(2);
    //
    //   assert.deepEqual(promise[1],{add: '2', message: 'you added'});
    //   done();
    // });
    // comp.getProducts();

  });

});


