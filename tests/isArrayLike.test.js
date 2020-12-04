import chai from 'chai';
import isArrayLike from '../src/isArrayLike.js';

const { expect } = chai;

describe('isArrayLike', function () {
  it('With empty array', function () {
    const _isArrayLike = isArrayLike([]);
    expect(_isArrayLike).to.be.true;
  });

  it('With filled array', function () {
    const _isArrayLike = isArrayLike([1, 2, 3]);
    expect(_isArrayLike).to.be.true;
  });

  it('With null', function () {
    const _isArrayLike = isArrayLike(null);
    expect(_isArrayLike).to.be.false;
  });

  it('With empty object', function () {
    const _isArrayLike = isArrayLike({});
    expect(_isArrayLike).to.be.false;
  });

  it('With filled object', function () {
    const _isArrayLike = isArrayLike({ a: 1 });
    expect(_isArrayLike).to.be.false;
  });

  it('With empty string', function () {
    const _isArrayLike = isArrayLike('');
    expect(_isArrayLike).to.be.true;
  });

  it('With filled string', function () {
    const _isArrayLike = isArrayLike('test');
    expect(_isArrayLike).to.be.true;
  });

  it('With function', function () {
    const _isArrayLike = isArrayLike(function () {});
    expect(_isArrayLike).to.be.false;
  });

  it('With arguments', function () {
    const _isArrayLike = isArrayLike(
      (function () {
        return arguments;
      })()
    );
    expect(_isArrayLike).to.be.true;
  });
});
