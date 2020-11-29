import chai from 'chai';
import words from '../src/words.js';

const { expect } = chai;

describe('words', function () {
  it('Empty string', function () {
    const wordsArray = words('');
    expect(wordsArray).to.be.an('array').that.is.empty;
  });

  it('Two words', function() {
    const wordsArray = words('My Test');
    expect(wordsArray).to.be.an('array').that.have.lengthOf(2);
  });
});
