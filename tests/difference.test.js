
import chai from "chai"
import difference from "../src/difference.js"

const expect = chai.expect

describe("difference", function () {
   it("smoke", function () {
      expect(difference([1, 2, 3], [2, 3])).to.have.members([1])
   });

   it("same", function () {
      expect(difference([2, 3], [2, 3])).to.have.members([])
   });

   it("['2', '3'], ['2', '3']", function () {
      expect(difference(['2', '3'], ['2', '3'])).to.have.members([])
   });

   it("['2', '3'], [2, 3]", function () {
      expect(difference(['2', '3'], [2, 3])).to.have.ordered.members(['2', '3'])
   });

   it("null", function () {
      expect(difference(null, [2, 3])).to.have.members([])
   });
})