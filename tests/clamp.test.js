
import chai from "chai"
import clamp from "../src/clamp.js"

const expect = chai.expect

describe("clamp", function () {
   it("smoke", function () {
      expect(clamp(4, 1, 2)).to.deep.equal(2)
   });

   it("1, 1, 2", function () {
      expect(clamp(1, 1, 2)).to.deep.equal(1)
   });

   it("1.5, 1, 2", function () {
      expect(clamp(1.5, 1, 2)).to.deep.equal(1.5)
   });

   it("0, 1, 2", function () {
      expect(clamp(0, 1, 2)).to.deep.equal(1)
   });

   it("0, 2, 1", function () {
      expect(clamp(0, 2, 1)).to.deep.equal(1)
   });

   it("-3, -2, -1", function () {
      expect(clamp(-3, -2, -1)).to.deep.equal(-2)
   });

   it("0, '1', '2'", function () {
      expect(clamp(0, '1', '2')).to.deep.equal(1)
   });
})