import chai from 'chai';
import toString from '../src/toString.js';

const { expect } = chai;

describe('toString', function () {
  it('With null', function () {
    const string = toString(null)
    expect(string).to.be.equal('');
  });

  it('With undefined', function () {
    const string = toString(undefined)
    expect(string).to.be.equal('');
  });

  it('With array of numbers', function () {
    const string = toString([1, 2, 3])
    expect(string).to.be.equal('1,2,3');
  });

  it('With array of nulls', function () {
    const string = toString([null, null])
    expect(string).to.be.equal(',');
  });

  it('With -0', function () {
    const string = toString(-0)
    expect(string).to.be.equal('-0');
  });

  it('With string', function () {
    const string = toString('test')
    expect(string).to.be.equal('test');
  });

  it('With empty Symbol', function () {
    const string = toString(Symbol())
    expect(string).to.be.equal('Symbol()');
  });

  it('With filled Symbol', function () {
    const string = toString(Symbol('test'))
    expect(string).to.be.equal('Symbol(test)');
  });
});
