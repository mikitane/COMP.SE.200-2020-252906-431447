import chai from 'chai';
import isSymbol from '../src/isSymbol.js';

const { expect } = chai;

describe('isSymbol', function () {
  it('With Symbol', function () {
    const _isSymbol = isSymbol(Symbol())
    expect(_isSymbol).to.be.true;
  });

  it('With String', function () {
    const _isSymbol = isSymbol('test')
    expect(_isSymbol).to.be.false;
  });

  it('With number', function () {
    const _isSymbol = isSymbol(100)
    expect(_isSymbol).to.be.false;
  });

  it('With object', function () {
    const _isSymbol = isSymbol({})
    expect(_isSymbol).to.be.false;
  });

  it('With array', function () {
    const _isSymbol = isSymbol([])
    expect(_isSymbol).to.be.false;
  });

  it('With null', function () {
    const _isSymbol = isSymbol(null)
    expect(_isSymbol).to.be.false;
  });
});
