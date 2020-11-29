import chai from 'chai';
import isBoolean from '../src/isBoolean.js';

const { expect } = chai;

describe('isBoolean', function () {

  // Fails
  it('With true', function () {
    const _isBoolean = isBoolean(true)
    expect(_isBoolean).to.be.true;
  });

  it('With null', function () {
    const _isBoolean = isBoolean(null)
    expect(_isBoolean).to.be.false;
  });
});