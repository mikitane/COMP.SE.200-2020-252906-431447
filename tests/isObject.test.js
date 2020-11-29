import chai from 'chai';
import isObject from '../src/isObject.js';

const { expect } = chai;

describe('isObject', function () {
  it('With Object', function () {
    const _isObject = isObject({})
    expect(_isObject).to.be.true;
  });

  it('With String', function () {
    const _isObject = isObject('test')
    expect(_isObject).to.be.false;
  });
});
