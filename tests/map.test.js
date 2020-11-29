import chai from 'chai';
import map from '../src/map.js';

const { expect } = chai;

describe('map', function () {
  it('With integers multiplied', function () {
    const mappedValues = map([1, 2, 3], x => x * 2);
    expect(mappedValues).to.have.members([2, 4, 6]);
  });
});
