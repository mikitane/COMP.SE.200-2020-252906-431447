import chai from 'chai';
import isBoolean from '../src/isBoolean.js';

const { expect } = chai;

describe('isBoolean', function () {
  it('With true', function () {
    const _isBoolean = isBoolean(true)
    expect(_isBoolean).to.be.true;
  });

  it('With false', function () {
    const _isBoolean = isBoolean(false)
    expect(_isBoolean).to.be.true;
  });

  it('With null', function () {
    const _isBoolean = isBoolean(null)
    expect(_isBoolean).to.be.false;
  });

  it('With empty string', function () {
    const _isBoolean = isBoolean('')
    expect(_isBoolean).to.be.false;
  });

  it('With filled string', function () {
    const _isBoolean = isBoolean('test')
    expect(_isBoolean).to.be.false;
  });

  it('With number 0', function () {
    const _isBoolean = isBoolean(0)
    expect(_isBoolean).to.be.false;
  });

  it('With number 1', function () {
    const _isBoolean = isBoolean(1)
    expect(_isBoolean).to.be.false;
  });
});