import chai from 'chai';
import upperFirst from '../src/upperFirst.js';

const { expect } = chai;

describe('upperFirst', function () {
  it('With all lower case', function () {
    const modifiedString = upperFirst('test');
    expect(modifiedString).to.be.equal('Test');
  });

  it('With all upper case', function () {
    const modifiedString = upperFirst('TEST');
    expect(modifiedString).to.be.equal('TEST');
  });

  it('With null', function () {
    const modifiedString = upperFirst(null);
    expect(modifiedString).to.be.equal('');
  });
});
