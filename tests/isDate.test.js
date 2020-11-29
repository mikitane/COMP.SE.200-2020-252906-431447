import chai from 'chai';
import isDate from '../src/isDate.js';

const { expect } = chai;

describe('isDate', function () {
  it('With Date', function () {
    const _isDate = isDate(new Date());
    expect(_isDate).to.be.true;
  });

  it('With null', function () {
    const _isDate = isDate(null)
    expect(_isDate).to.be.false;
  });
});
