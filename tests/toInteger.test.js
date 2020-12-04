import chai from 'chai';
import toInteger from '../src/toInteger.js';

const { expect } = chai;

describe('toInteger', function () {
  it('With decimal', function () {
    const integer = toInteger(1.1)
    expect(integer).to.be.equal(1);
  });

  it('With Number.MIN_VALUE', function () {
    const integer = toInteger(Number.MIN_VALUE)
    expect(integer).to.be.equal(0);
  });

  it('With Infinity', function () {
    const integer = toInteger(Infinity)
    expect(integer).to.be.equal(1.7976931348623157e+308);
  });

  it('With string representing number', function () {
    const integer = toInteger('3.2')
    expect(integer).to.be.equal(3);
  });
});

