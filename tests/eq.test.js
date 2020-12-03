
import chai from "chai"
import eq from "../src/eq.js"

const expect = chai.expect

describe("eq", function () {
   it("'a', 'a'", function () {
      expect(eq('a', 'a')).to.be.true
   });

   it("'b', 'a'", function () {
      expect(eq('b', 'a')).to.be.false
   });

   it("NaN, NaN", function () {
      expect(eq(NaN, NaN)).to.be.true
   });

   const olioA = {'a':1};
   const olioB = {'a':1};
   
   it("different object", function () {
      expect(eq(olioA, olioB)).to.be.false
   });

   it("same object", function () {
      expect(eq(olioA, olioA)).to.be.true
   });

   const taulukkoA = [1, 2]
   const taulukkoB = [1, 2]

   it("different array", function () {
      expect(eq(taulukkoA, taulukkoB)).to.be.false
   });

   it("same array", function () {
      expect(eq(taulukkoA, taulukkoA)).to.be.true
   });
})