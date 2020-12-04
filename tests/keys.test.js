import chai from 'chai';
import keys from '../src/keys.js';

const { expect } = chai;

describe('keys', function () {
  it('With Object', function () {
    const _keys = keys({ 'a': 1, 'b': 2 });
    expect(_keys).to.have.members(['a', 'b']);
  });

  it('With Array', function () {
    const _keys = keys([1, 2, 3]);
    expect(_keys).to.have.members(['0', '1', '2']);
  });

  it('With object instance', function () {
    function test() {
        this.a = 1;
    }

    const _keys = keys(new test);
    expect(_keys).to.have.members(['a']);
  });

  it('With string', function () {
    const _keys = keys('abc');
    expect(_keys).to.have.members(['0', '1', '2']);
  });
});
