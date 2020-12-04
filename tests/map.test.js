import chai from 'chai';
import map from '../src/map.js';

const { expect } = chai;

describe('map', function () {
  it('With integers multiplied', function () {
    const mappedValues = map([1, 2, 3], x => x * 2);
    expect(mappedValues).to.have.members([2, 4, 6]);
  });

  it('With null as first parameter', function () {
    const mappedValues = map(null, x => x);
    expect(mappedValues).to.be.empty;
  });

  it('With object', function () {
    const mappedValues = () => map({"a": 1}, x => x);
    expect(mappedValues).to.throw();
  });

  it('With string', function () {
    const mappedValues = () => map('test', x => x);
    expect(mappedValues).to.throw();
  });
});
