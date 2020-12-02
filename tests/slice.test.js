import chai from 'chai';
import slice from '../src/slice.js';

const { expect } = chai;

describe('slice', function () {
  it('With start and end params set', function () {
    const _slice = slice([1, 2, 3, 4, 5], 1, 3);
    expect(_slice).to.have.members([2, 3]);
  });

  it('With start and end params not set', function () {
    const _slice = slice([1, 2, 3]);
    expect(_slice).to.have.members([1, 2, 3]);
  });

  it('With empty array, no start and end params', function () {
    const _slice = slice([]);
    expect(_slice).to.be.empty;
  });

  it('With null', function () {
    const _slice = slice(null);
    expect(_slice).to.be.empty;
  });

  it('With negative start and end params (smaller than array length)', function () {
    const _slice = slice([1, 2, 3, 4, 5], -3, -1);
    expect(_slice).to.have.members([3, 4]);
  });

  it('With negative start and end params (bigger than array length)', function () {
    const _slice = slice([1, 2, 3, 4, 5], -10, -15);
    expect(_slice).to.be.empty;
  });
});
