import chai from 'chai';
import reduce from '../src/reduce.js';

const { expect } = chai;

describe('reduce', function () {
  it('With list of integers', function () {
    const reducedValue = reduce([1, 2, 3], (sum, n) => sum + n, 0);
    expect(reducedValue).to.be.equal(6);
  });
});
