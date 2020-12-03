
import chai from "chai"
import chunk from "../src/chunk.js"

const expect = chai.expect

describe("chunk", function () {
   it("smoke", function () {
      expect(chunk(['a', 'b', 'c', 'd', 'e'], 2)).to.have.ordered.members([['a', 'b'], 
      ['c', 'd'], ['e']])
   });

   it("['a', 'b', 'c', 'd'], 2", function () {
      expect(chunk(['a', 'b', 'c', 'd'], 2)).to.have.ordered.members([['a', 'b'], 
      ['c', 'd']])
   });

   it("1", function () {
      expect(chunk(['a', 'b', 'c', 'd', 'e'], 1)).to.have.ordered.members([['a'], ['b'], 
      ['c'], ['d'], ['e']])
   });

   it("6", function () {
      expect(chunk(['a', 'b', 'c', 'd', 'e'], 6)).to.have.ordered.members([['a', 'b', 'c', 'd', 'e']])
   });

   it("[], 1", function () {
      expect(chunk([], 1)).to.have.ordered.members([[]])
   });

   it("null, 1", function () {
      expect(chunk(null, 1)).to.be.null
   });
})