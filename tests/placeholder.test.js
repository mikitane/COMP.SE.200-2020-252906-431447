import chai from 'chai';
const { expect } = chai;

import myTest from '../src/myTest.js';


describe('Placeholder Test', function() {
    it('Test1', function() {
        myTest();
        expect('123').to.be.a('string')
    });
})