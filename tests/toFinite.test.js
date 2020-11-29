import chai from 'chai';
import toFinite from '../src/toFinite.js';

const { expect } = chai;

describe('toFinite', function () {
  it('With Infinity', function () {
    const finiteNumber = toFinite(Infinity)
    expect(finiteNumber).to.be.equal(1.7976931348623157e+308);
  });
});
