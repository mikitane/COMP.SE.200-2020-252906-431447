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
});