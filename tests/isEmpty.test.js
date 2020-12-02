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

  it('With null', function () {
    const _isEmpty = isEmpty(null);
    expect(_isEmpty).to.be.true;
  });

  it('With empty object', function () {
    const _isEmpty = isEmpty({});
    expect(_isEmpty).to.be.true;
  });

  it('With filled object', function () {
    const _isEmpty = isEmpty({a:1});
    expect(_isEmpty).to.be.false;
  });

  it('With empty string', function () {
    const _isEmpty = isEmpty('');
    expect(_isEmpty).to.be.true;
  });

  it('With filled string', function () {
    const _isEmpty = isEmpty('test');
    expect(_isEmpty).to.be.false;
  });

  it('With empty arguments', function () {
    const _isEmpty = isEmpty(function() { return arguments }());
    expect(_isEmpty).to.be.true;
  });

  it('With filled arguments', function () {
    const _isEmpty = isEmpty(function(x) { return arguments }(1));
    expect(_isEmpty).to.be.false;
  });

  it('With empty Map', function () {
    const _isEmpty = isEmpty(new Map());
    expect(_isEmpty).to.be.true;
  });

  it('With filled Map', function () {
    const _isEmpty = isEmpty(new Map([['a', 1]]));
    expect(_isEmpty).to.be.false;
  });

  it('With object created with new keyword (empty prototype)', function () {
    function func() {}
    const _isEmpty = isEmpty((new func()).constructor.prototype);
    expect(_isEmpty).to.be.true;
  });

  it('With object created with new keyword (filled prototype)', function () {
    function func() {}
    func.prototype.test = 1;
    const _isEmpty = isEmpty((new func()).constructor.prototype);
    expect(_isEmpty).to.be.false;
  });
});
