
import chai from "chai"
import divide from "../src/divide.js"

const expect = chai.expect

describe("divide", function () {
   it("4, 2", function () {
      expect(divide(4, 2)).to.be.closeTo(2, 0.0001)
   });

   it("-4, -2", function () {
      expect(divide(-4, -2)).to.be.closeTo(2, 0.0001)
   });

   it("-4, 2", function () {
      expect(divide(-4, 2)).to.be.closeTo(-2, 0.0001)
   });

   it("4, -2", function () {
      expect(divide(4, -2)).to.be.closeTo(-2, 0.0001)
   });

   it("4.6, 2", function () {
      expect(divide(4.6, 2)).to.be.closeTo(2.3, 0.0001)
   });

   it("4, 2.5", function () {
      expect(divide(4, 2.5)).to.be.closeTo(1.6, 0.0001)
   });

   it("4.4, 2.2", function () {
      expect(divide(4.4, 2.2)).to.be.closeTo(2, 0.0001)
   });

   it("4, 0", function () {
      expect(divide(4, 0)).to.throw()
   });
})
