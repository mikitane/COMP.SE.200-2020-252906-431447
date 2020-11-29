import chai from 'chai';
import slice from '../src/slice.js';

const { expect } = chai;

describe('slice', function () {
  it('With start and end params set', function () {
    const _slice = slice([1, 2, 3, 4, 5], 1, 3);
    expect(_slice).to.have.members([2, 3]);
  });
});
