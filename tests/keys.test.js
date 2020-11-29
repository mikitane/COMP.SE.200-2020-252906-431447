import chai from 'chai';
import keys from '../src/keys.js';

const { expect } = chai;

describe('keys', function () {
  it('With Object', function () {
    const _keys = keys({ 'a': 1, 'b': 2 });
    expect(_keys).to.have.members(['a', 'b']);
  });
});
