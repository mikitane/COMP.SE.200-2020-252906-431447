import chai from 'chai';
import isEmpty from '../src/isEmpty.js';

const { expect } = chai;

describe('isEmpty', function () {
  it('With empty Array', function () {
    const _isEmpty = isEmpty([]);
    expect(_isEmpty).to.be.true;
  });

  it('With filled Array', function () {
    const _isEmpty = isEmpty([1, 2]);
    expect(_isEmpty).to.be.false;
  });

  it('With array of objects', function() {
    const _isEmpty = isEmpty([{ product: 'My Product 1', price: 10.20 }, { product: 'My Product 2', price: 1.30 }]);
    expect(_isEmpty).to.be.false;
  });

  it('With array of single object', function() {
    const _isEmpty = isEmpty([{ product: 'My Product 1', price: 10.20 }]);
    expect(_isEmpty).to.be.false;
  });
});
