import chai from 'chai';
import isLength from '../src/isLength.js';

const { expect } = chai;

describe('isLength', function () {
  it('With integer', function () {
    const _isLength = isLength(1)
    expect(_isLength).to.be.true;
  });

  it('With decimal', function () {
    const _isLength = isLength(1.1)
    expect(_isLength).to.be.false;
  });

  it('With string', function () {
    const _isLength = isLength('1.1')
    expect(_isLength).to.be.false;
  });

  it('With null', function () {
    const _isLength = isLength(null)
    expect(_isLength).to.be.false;
  });

  it('With empty array', function () {
    const _isLength = isLength([])
    expect(_isLength).to.be.false;
  });
});