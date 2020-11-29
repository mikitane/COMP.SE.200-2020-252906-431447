import chai from 'chai';
import isEmpty from '../src/isEmpty.js';

const { expect } = chai;

describe('isEmpty', function () {
  it('With empty Array', function () {
    const _isEmpty = isEmpty([]);
    expect(_isEmpty).to.be.true;
  });

  it('With filled Array', function () {
    const _isEmpty = isEmpty([1, 2]);
    expect(_isEmpty).to.be.false;
  });
});
