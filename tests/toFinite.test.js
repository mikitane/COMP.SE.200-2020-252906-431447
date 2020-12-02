import chai from 'chai';
import toFinite from '../src/toFinite.js';

const { expect } = chai;

describe('toFinite', function () {
  it('With Infinity', function () {
    const finiteNumber = toFinite(Infinity)
    expect(finiteNumber).to.be.equal(1.7976931348623157e+308);
  });

  it('With -Infinity', function () {
    const finiteNumber = toFinite(-Infinity)
    expect(finiteNumber).to.be.equal(-1.7976931348623157e+308);
  });

  it('With null', function () {
    const finiteNumber = toFinite(null)
    expect(finiteNumber).to.be.equal(0);
  });

  it('With zero', function () {
    const finiteNumber = toFinite(0)
    expect(finiteNumber).to.be.equal(0);
  });

  it('With one', function () {
    const finiteNumber = toFinite(1)
    expect(finiteNumber).to.be.equal(1);
  });
});
