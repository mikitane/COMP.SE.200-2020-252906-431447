
import chai from "chai"
import defaultTo from "../src/defaultTo.js"

const expect = chai.expect

describe("defaultTo", function () {
   it("1, 2", function () {
      expect(defaultTo(1, 2)).to.deep.equal(1)
   });

   it("null", function () {
      expect(defaultTo(null, 2)).to.deep.equal(2)
   });

   it("NaN", function () {
      expect(defaultTo(NaN, 2)).to.deep.equal(2)
   });

   it("undefined", function () {
      expect(defaultTo(undefined, 2)).to.deep.equal(2)
   });

   it("0", function () {
      expect(defaultTo(0, 2)).to.deep.equal(0)
   });

   it("With product category filled", function() {
      expect(defaultTo('Category 1', 'Default category')).to.be.equal('Category 1')
   });

   it("With product category not filled, null", function() {
      expect(defaultTo(null, 'Default category')).to.be.equal('Default category')
   });
})