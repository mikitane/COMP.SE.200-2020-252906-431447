
import chai from "chai"
import divide from "../src/divide.js"

const expect = chai.expect

describe("divide", function () {
   it("4, 2", function () {
      expect(divide(4, 2)).to.deep.equal(2)
   });

   it("-4, -2", function () {
      expect(divide(-4, -2)).to.deep.equal(2)
   });

   it("-4, 2", function () {
      expect(divide(-4, 2)).to.deep.equal(-2)
   });

   it("4, -2", function () {
      expect(divide(4, -2)).to.deep.equal(-2)
   });

   it("4, 0", function () {
      expect(divide(4, 0)).to.throw()
   });
})