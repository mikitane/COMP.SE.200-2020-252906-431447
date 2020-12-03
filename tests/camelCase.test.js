
import chai from "chai"
import camelCase from "../src/camelCase.js"

const expect = chai.expect

describe("camelCase", function () {
   it("abc def ghi", function ()  {
      expect(camelCase('abc def ghi')).to.deep.equal('abcDefGhi')
   });

   it("abc", function () {
      expect(camelCase('abc')).to.deep.equal('abc')
   });

   it("(empty)", function () {
      expect(camelCase('')).to.deep.equal('')
   });

   it("ABC", function () {
      expect(camelCase('ABC')).to.deep.equal('abc')
   });

   it("abcDefGhi", function ()  {
      expect(camelCase('abcDefGhi')).to.deep.equal('abcDefGhi')
   });
})