import chai from 'chai';
import toNumber from '../src/toNumber.js';

const { expect } = chai;

describe('toNumber', function () {
  it('With String representing Number', function () {
    const number = toNumber('1.1')
    expect(number).to.be.equal(1.1);
  });

  it('With Number', function () {
    const number = toNumber(1.1)
    expect(number).to.deep.equal(1.1);
  });

  it('With Symbol', function () {
    const number = toNumber(Symbol())
    expect(number).to.deep.equal(NaN);
  });

  it('With empty Object', function () {
    const number = toNumber({})
    expect(number).to.deep.equal(NaN);
  });

  it('With valueOf function in object returning 1 ', function () {
    const number = toNumber({ valueOf: () => 1 })
    expect(number).to.equal(1);
  });

  it('With valueOf function in object returning 0 ', function () {
    const number = toNumber({ valueOf: () => 0 })
    expect(number).to.equal(0);
  });

  it('With valueOf property in object ', function () {
    const number = toNumber({ valueOf: 1 })
    expect(number).to.deep.equal(NaN);
  });

  it('With binary representing 1', function () {
    const number = toNumber('0b0001')
    expect(number).to.equal(1);
  });

  it('With octal representing 1', function () {
    const number = toNumber('0o1')
    expect(number).to.equal(1);
  });

  it('With bad signed hex', function () {
    const number = toNumber('-0x0001')
    expect(number).to.deep.equal(NaN);
  });
});
