import chai from 'chai';
import toNumber from '../src/toNumber.js';

const { expect } = chai;

describe('toNumber', function () {
  it('With String representing Number', function () {
    const number = toNumber('1.1')
    expect(number).to.be.equal(1.1);
  });
});
