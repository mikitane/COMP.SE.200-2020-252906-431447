
import chai from "chai"
import every from "../src/every.js"

const expect = chai.expect

describe("every", function () {
   it("Boolean 1", function () {
      expect(every([true, false, true], Boolean)).to.be.false
   });

   it("Boolean 2", function () {
      expect(every([true, true, true], Boolean)).to.be.true
   });

   it("null", function () {
      expect(every(null, Boolean)).to.be.false
   });
})