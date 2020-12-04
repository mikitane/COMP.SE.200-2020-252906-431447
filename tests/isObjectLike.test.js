import chai from 'chai';
import isObjectLike from '../src/isObjectLike.js';

const { expect } = chai;

describe('isObjectLike', function () {
  it('With Object', function () {
    const _isObjectLike = isObjectLike({});
    expect(_isObjectLike).to.be.true;
  });

  it('With null', function () {
    const _isObjectLike = isObjectLike(null)
    expect(_isObjectLike).to.be.false;
  });

  it('With String', function () {
    const _isObjectLike = isObjectLike('test')
    expect(_isObjectLike).to.be.false;
  });

  it('With array', function () {
    const _isObjectLike = isObjectLike([])
    expect(_isObjectLike).to.be.true;
  });

  it('With function', function () {
    const _isObjectLike = isObjectLike(function () {})
    expect(_isObjectLike).to.be.false;
  });
});
