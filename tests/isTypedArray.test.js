import chai from 'chai';
import isTypedArray from '../src/isTypedArray.js';

const { expect } = chai;

describe('isTypedArray', function () {
  it('With Uint8Array', function () {
    const _isTypedArray = isTypedArray(new Uint8Array)
    expect(_isTypedArray).to.be.true;
  });

  it('With Array', function () {
    const _isTypedArray = isTypedArray([])
    expect(_isTypedArray).to.be.false;
  });
});
