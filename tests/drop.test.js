
import chai from "chai"
import drop from "../src/drop.js"

const expect = chai.expect

describe("drop", function () {
   it("[1, 2, 3]", function () {
      expect(drop([1, 2, 3])).to.have.ordered.members([2, 3])
   });

   it("[], 2", function () {
      expect(drop([], 2)).to.have.ordered.members([])
   });

   it("[1, 2, 3], 1", function () {
      expect(drop([1, 2, 3], 1)).to.have.ordered.members([2, 3])
   });

   it("[1, 2, 3], 3", function () {
      expect(drop([1, 2, 3], 3)).to.have.ordered.members([])
   });

   it("[1, 2, 3], 4", function () {
      expect(drop([1, 2, 3], 4)).to.have.ordered.members([])
   });

   it("[1, 2, 3], 0", function () {
      expect(drop([1, 2, 3], 0)).to.have.ordered.members([1, 2, 3])
   });

   it("[1, 2, 3], -1", function () {
      expect(drop([1, 2, 3], -1)).to.have.ordered.members([1, 2, 3])
   });

   it("null", function () {
      expect(drop(null)).to.be.null
   });
})