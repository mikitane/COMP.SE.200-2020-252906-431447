
import chai from "chai"
import defaultToAny from "../src/defaultToAny.js"

const expect = chai.expect

describe("defaultToAny", function () {
   it("1, 2, 3", function () {
      expect(defaultToAny(1, 2, 3)).to.deep.equal(1)
   });

   it("1 null", function () {
      expect(defaultToAny(null, 2, 3)).to.deep.equal(2)
   });

   it("2 null", function () {
      expect(defaultToAny(null, null, 3)).to.deep.equal(3)
   });

   it("3 null", function () {
      expect(defaultToAny(null, null, null)).to.deep.equal(null)
   });

   it("1 undefined", function () {
      expect(defaultToAny(undefined, 2, 3)).to.deep.equal(2)
   });

   it("2 undefined", function () {
      expect(defaultToAny(undefined, undefined, 3)).to.deep.equal(3)
   });

   it("3 undefined", function () {
      expect(defaultToAny(undefined, undefined, undefined)).to.deep.equal(undefined)
   });

   it("1 NaN", function () {
      expect(defaultToAny(NaN, 2, 3)).to.deep.equal(2)
   });

   it("2 NaN", function () {
      expect(defaultToAny(NaN, NaN, 3)).to.deep.equal(3)
   });

   it("3 NaN", function () {
      expect(defaultToAny(NaN, NaN, NaN)).to.deep.equal(NaN)
   });

   it("NaN, undefined", function () {
      expect(defaultToAny(NaN, undefined, 3)).to.deep.equal(3)
   });

   it("NaN, null", function () {
      expect(defaultToAny(NaN, null, 3)).to.deep.equal(3)
   });

   it("null, undefined", function () {
      expect(defaultToAny(null, undefined, 3)).to.deep.equal(3)
   });

   it("null, undefined, NaN", function () {
      expect(defaultToAny(null, undefined, NaN)).to.deep.equal(NaN)
   });

   it("charaters", function () {
      expect(defaultToAny('a', 'b', 'c')).to.deep.equal('a')
   });
})