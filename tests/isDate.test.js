import chai from 'chai';
import isDate from '../src/isDate.js';

const { expect } = chai;

describe('isDate', function () {
  it('With Date', function () {
    const _isDate = isDate(new Date());
    expect(_isDate).to.be.true;
  });

  it('With null', function () {
    const _isDate = isDate(null);
    expect(_isDate).to.be.false;
  });

  it('With date as string', function () {
    const _isDate = isDate('Mon April 23 2012');
    expect(_isDate).to.be.false;
  });

  it('With number', function () {
    const _isDate = isDate(100000);
    expect(_isDate).to.be.false;
  });

  it('With JSON date', function () {
    const _isDate = isDate('2020-12-04');
    expect(_isDate).to.be.false;
  });
});
