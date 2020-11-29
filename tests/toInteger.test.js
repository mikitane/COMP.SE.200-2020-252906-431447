import chai from 'chai';
import toInteger from '../src/toInteger.js';

const { expect } = chai;

describe('toInteger', function () {
  it('With decimal', function () {
    const integer = toInteger(1.1)
    expect(integer).to.be.equal(1);
  });
});
