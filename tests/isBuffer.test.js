import chai from 'chai';
import isBuffer from '../src/isBuffer.js';

const { expect } = chai;

describe('isBuffer', function () {

  it('With Buffer', function () {
    const _isBuffer = isBuffer(new Buffer(2))
    expect(_isBuffer).to.be.true;
  });

  it('With String', function () {
    const _isBuffer = isBuffer('test')
    expect(_isBuffer).to.be.false;
  });

  it('With null', function () {
    const _isBuffer = isBuffer(null)
    expect(_isBuffer).to.be.false;
  });

  it('With number', function () {
    const _isBuffer = isBuffer(100)
    expect(_isBuffer).to.be.false;
  });

  it('With object', function () {
    const _isBuffer = isBuffer({})
    expect(_isBuffer).to.be.false;
  });

  it('With Uint8Array', function () {
    const _isBuffer = isBuffer(new Uint8Array(2))
    expect(_isBuffer).to.be.false;
  });
});