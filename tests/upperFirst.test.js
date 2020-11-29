import chai from 'chai';
import upperFirst from '../src/upperFirst.js';

const { expect } = chai;

describe('upperFirst', function () {
  it('All lower case', function () {
    const modifiedString = upperFirst('test');
    expect(modifiedString).to.be.equal('Test');
  });
});
