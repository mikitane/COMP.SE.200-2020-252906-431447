import chai from 'chai';
import toString from '../src/toString.js';

const { expect } = chai;

describe('toString', function () {
  it('With null', function () {
    const string = toString(null)
    expect(string).to.be.equal('');
  });
});
