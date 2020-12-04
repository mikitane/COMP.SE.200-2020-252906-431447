
import chai from "chai"
import add from "../src/add.js"

const expect = chai.expect

describe("add", function () {
   it("2, 3", function () {
      expect(add(2, 3)).to.deep.equal(5)
   });

   it("2, -3", function () {
      expect(add(2, -3)).to.deep.equal(-1)
   });

   it("-2, 3", function () {
      expect(add(-2, 3)).to.deep.equal(1)
   });

   it("-3, -4", function () {
      expect(add(-3, -4)).to.deep.equal(-7)
   });

   it("0, 0", function () {
      expect(add(0, 0)).to.deep.equal(0)
   });

   it("1.1, 2.2", function () {
      expect(add(1.1, 2.2)).to.be.closeTo(3.3, 0.0001)
   });

})