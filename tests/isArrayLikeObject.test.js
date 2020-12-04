import chai from 'chai';
import isArrayLikeObject from '../src/isArrayLikeObject.js';

const { expect } = chai;

describe('isArrayLikeObject', function () {
  it('With empty array', function () {
    const _isArrayLikeObject = isArrayLikeObject([]);
    expect(_isArrayLikeObject).to.be.true;
  });

  it('With filled array', function () {
    const _isArrayLikeObject = isArrayLikeObject([1, 2, 3]);
    expect(_isArrayLikeObject).to.be.true;
  });

  it('With null', function () {
    const _isArrayLikeObject = isArrayLikeObject(null);
    expect(_isArrayLikeObject).to.be.false;
  });

  it('With empty object', function () {
    const _isArrayLikeObject = isArrayLikeObject({});
    expect(_isArrayLikeObject).to.be.false;
  });

  it('With filled object', function () {
    const _isArrayLikeObject = isArrayLikeObject({ a: 1 });
    expect(_isArrayLikeObject).to.be.false;
  });

  it('With empty string', function () {
    const _isArrayLikeObject = isArrayLikeObject('');
    expect(_isArrayLikeObject).to.be.false;
  });

  it('With filled string', function () {
    const _isArrayLikeObject = isArrayLikeObject('test');
    expect(_isArrayLikeObject).to.be.false;
  });

  it('With function', function () {
    const _isArrayLikeObject = isArrayLikeObject(function () {});
    expect(_isArrayLikeObject).to.be.false;
  });

  it('With arguments', function () {
    const _isArrayLikeObject = isArrayLikeObject(
      (function () {
        return arguments;
      })()
    );
    expect(_isArrayLikeObject).to.be.true;
  });
});
