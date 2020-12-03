
import chai from "chai"
import compact from "../src/compact.js"

const expect = chai.expect

describe("compact", function () {
   it("[0, 1, 2, 3]", function () {
      expect(compact([0, 1, 2, 3])).to.have.ordered.members([1, 2, 3])
   });

   it("[1, 2, 0, 3]", function () {
      expect(compact([1, 2, 0, 3])).to.have.ordered.members([1, 2, 3])
   });

   it("[1, 2, 3, 0]", function () {
      expect(compact([1, 2, 3, 0])).to.have.ordered.members([1, 2, 3])
   });

   it("[]", function () {
      expect(compact([])).to.have.ordered.members([])
   });

   it("[1, 2, 3]", function () {
      expect(compact([1, 2, 3])).to.have.ordered.members([1, 2, 3])
   });

   it("[0, false, '', null]", function () {
      expect(compact([0, false, '', null])).to.have.ordered.members([])
   });
})