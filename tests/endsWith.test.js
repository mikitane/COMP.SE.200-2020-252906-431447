
import chai from "chai"
import endsWith from "../src/endsWith.js"

const expect = chai.expect

describe("endsWith", function () {
   it("smoke", function () {
      expect(endsWith('asdf', 'f')).to.be.true
   });

   it("'asdf', 'd'", function () {
      expect(endsWith('asdf', 'd')).to.be.false
   });

   it("'asdf', 'a'", function () {
      expect(endsWith('asdf', 'a')).to.be.false
   });

   it("'asdf', 'd', 3", function () {
      expect(endsWith('asdf', 'd', 3)).to.be.true
   });

   it("'asdf', 'a', 1", function () {
      expect(endsWith('asdf', 'a', 1)).to.be.true
   });

   it("'asdf', 's', 1", function () {
      expect(endsWith('asdf', 's', 1)).to.be.false
   });

   it("'asd.', '.'", function () {
      expect(endsWith('asd.', '.')).to.be.true
   });

   it("'asdf', '.'", function () {
      expect(endsWith('asdf', '.')).to.be.false
   });

   it("With dot in the end, single words", function() {
      expect(endsWith('Test.', '.')).to.be.true;
   });

   it("With dot in the end, sentence", function() {
      expect(endsWith('My test senctence.', '.')).to.be.true;
   });

   it("'asdf', 'd', 5", function () {
      expect(endsWith('asdf', 'd', 5)).to.be.false
   });

   it("'asdf', 'd', -1", function () {
      expect(endsWith('asdf', 'd', -1)).to.be.false
   });


})