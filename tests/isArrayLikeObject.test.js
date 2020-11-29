import chai from 'chai';
import isArrayLikeObject from '../src/isArrayLikeObject.js';

const { expect } = chai;

describe('isArrayLikeObject', function () {

  it('With array', function () {
    const _isArrayLikeObject = isArrayLikeObject([])
    expect(_isArrayLikeObject).to.be.true;
  });

  it('With string', function () {
    const _isArrayLikeObject = isArrayLikeObject('test')
    expect(_isArrayLikeObject).to.be.false;
  });
});