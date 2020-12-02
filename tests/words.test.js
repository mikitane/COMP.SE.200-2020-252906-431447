import chai from 'chai';
import words from '../src/words.js';

const { expect } = chai;

describe('words', function () {
  it('With empty string', function () {
    const wordsArray = words('');
    expect(wordsArray).to.be.an('array').that.is.empty;
  });

  it('With two words', function() {
    const wordsArray = words('My Test');
    expect(wordsArray).to.have.members(['My', 'Test']);
  });

  it('With dot in sentence', function() {
    const wordsArray = words('This product is good.', /[.\w]+/g);
    expect(wordsArray).to.have.members(['This', 'product', 'is', 'good.']);
  });

  it('With dot and comma in sentence', function() {
    const wordsArray = words('This product is good, no doubt.', /[,.\w]+/g);
    expect(wordsArray).to.have.members(['This', 'product', 'is', 'good,', 'no', 'doubt.']);
  });

  it('With custom pattern not matching anything', function () {
    const wordsArray = words('test', 'not');
    expect(wordsArray).to.be.an('array').that.is.empty;
  });

  it('With unicode words', function () {
    const wordsArray = words('test ä');
    expect(wordsArray).to.be.an('array').to.have.members(['test', 'ä']);
  });

  it('With ascii words', function () {
    const wordsArray = words('test test');
    expect(wordsArray).to.be.an('array').to.have.members(['test', 'test']);
  });
});
