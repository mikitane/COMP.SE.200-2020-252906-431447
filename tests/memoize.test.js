import chai from 'chai';
import memoize from '../src/memoize.js';

const { expect } = chai;

describe('memoize', function () {
  it('Without proper resolver, input changed', function () {
    const obj = { 'a': 2 };
    const func = memoize(x => x.a * 2);
    const computedValue = func(obj);

    // memoized function does not notice a changed
    // value inside an object. So, it should return
    // the previously memoized value.
    obj.a = 3;
    const memoizedValue = func(obj);

    expect(computedValue).to.be.equal(4);
    expect(memoizedValue).to.be.equal(4);
  });

  it('With proper resolver, input changed', function () {
    const obj = { 'a': 2 };

    const func = memoize(x => x.a * 2, x => x.a);
    const computedValue1 = func(obj);

    obj.a = 3;
    const computedValue2 = func(obj);

    expect(computedValue1).to.be.equal(4);
    expect(computedValue2).to.be.equal(6);
  });

  it('With proper resolver, input not changed', function () {
    const obj = { 'a': 2 };

    const func = memoize(x => x.a * 2, x => x.a);
    const computedValue = func(obj);
    const memoizedValue = func(obj);

    expect(computedValue).to.be.equal(4);
    expect(memoizedValue).to.be.equal(4);
  });

  it('With null as func, throw TypeError', function () {
    expect(() => memoize(null)).to.throw(TypeError);
  });

  it('With string as resolver, throw TypeError', function () {
    const func = () => memoize(() => {}, 'test')
    expect(func).to.throw(TypeError);
  });

  // This test is not always reliable, because it depends
  // on how powerful the cpu of the test environment is.
  it('With array of 10000000 items', function () {
    const obj = Array(10000000).fill(2);

    const func = memoize(x => x * 2);

    const startTime = new Date().getTime();
    const computedValue = func(obj);
    const midTime = new Date().getTime();
    const memoizedValue = func(obj);
    const endTime = new Date().getTime();

    expect(midTime - startTime).to.be.greaterThan(100)
    expect(endTime - midTime).to.be.lessThan(10);
  });

  // This test is not always reliable, because it depends
  // on how powerful the cpu of the test environment is.
  it('With reseted cache', function () {
    const obj = Array(10000000).fill(2);

    const func = memoize(x => x * 2);

    const startTime = new Date().getTime();
    const computedValue = func(obj);
    const midTime = new Date().getTime();

    // Reset cache
    func.cache.delete(obj)

    const memoizedValue = func(obj);
    const endTime = new Date().getTime();

    expect(midTime - startTime).to.be.greaterThan(100)
    expect(endTime - midTime).to.be.greaterThan(100);
  });

  it('With null as memoize.Cache', function () {
    memoize.Cache = null;
    const obj = { 'a': 2 };
    const func = memoize(x => x.a * 2);
    const computedValue = func(obj);

    expect(computedValue).to.be.equal(4);
  });

  it('With custom memoize.Cache', function () {
    function CustomCache() {
        this.values = {}
        this.set = (key, value) => { this.values[key] = value }
        this.has = key => key in this.values
        this.get = key => this.values[key]
    }

    memoize.Cache = CustomCache;

    const obj = { 'a': 2 };
    const func = memoize(x => x.a * 2);
    const computedValue = func(obj);

    expect(computedValue).to.be.equal(4);
  });
});
