import chai from 'chai';
import isArrayLike from '../src/isArrayLike.js';

const { expect } = chai;

describe('isArrayLike', function () {
  it('With array', function () {
    const _isArrayLike = isArrayLike([])
    expect(_isArrayLike).to.be.true;
  });

  it('With null', function () {
    const _isArrayLike = isArrayLike(null)
    expect(_isArrayLike).to.be.false;
  });
});
