import chai from 'chai';
import words from '../src/words.js';

const { expect } = chai;

describe('Words', function () {
  it('Empty string', function () {
    const wordsArray = words('');
    expect(wordsArray).to.be.an('array').that.is.empty;
  });
});
