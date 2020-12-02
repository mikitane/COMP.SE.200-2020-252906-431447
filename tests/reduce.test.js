import chai from 'chai';
import reduce from '../src/reduce.js';

const { expect } = chai;

describe('reduce', function () {
  it('With array of integers', function () {
    const reducedValue = reduce([1, 2, 3], (sum, n) => sum + n, 0);
    expect(reducedValue).to.be.equal(6);
  });

  it('With array of products, count total price', function () {
    const products = [
      { name: 'My Product 1', price: 10.24 },
      { name: 'My Product 2', price: 2.51 },
      { name: 'My Product 3', price: 200.52 },
    ];

    const totalPrice = reduce(products, (sum, product) => sum + product.price, 0);
    expect(totalPrice).to.be.equal(213.27);
  });

  it('With empty array', function () {
    const reducedValue = reduce([], (sum, n) => sum + n, 0);
    expect(reducedValue).to.be.equal(0);
  });

  it('With filled object', function () {
    const reducedValue = reduce({'a': 1, 'b': 2}, (result, value, key) => result + value);
    expect(reducedValue).to.be.equal(3);
  });
});
