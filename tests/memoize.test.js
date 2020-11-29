import chai from 'chai';
import memoize from '../src/memoize.js';

const { expect } = chai;

describe('memoize', function () {
  it('Without proper resolver', function () {
    const obj = { 'a': 2 };
    const func = memoize(x => x.a * 2);
    const origValue = func(obj);

    // memoized function does not notice a changed
    // value inside an object. So, it should return
    // the previously memoized value.
    obj.a = 3;
    const memoizedValue = func(obj);

    expect(origValue).to.be.equal(4);
    expect(memoizedValue).to.be.equal(4);
  });
});
