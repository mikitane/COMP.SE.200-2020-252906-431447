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
});
