
import chai from "chai"
import castArray from "../src/castArray.js"

const expect = chai.expect

describe("castArray", function () {
   it("smoke", function () {
      expect(castArray('qwe')).to.have.members(['qwe'])
   });

   it("(empty)", function () {
      expect(castArray('')).to.have.members([''])
   });
   
   it("Array", function () {
      expect(castArray(['a', 'b', 'c'])).to.have.members(['a', 'b', 'c'])
   });

   it("[1, 2, 3]", function () {
      expect(castArray([1, 2, 3])).to.have.members([1, 2, 3])
   });

   it("1", function () {
      expect(castArray(1)).to.have.members([1])
   });

   it("null", function () {
      expect(castArray(null)).to.have.members([null])
   });

   it("undefined", function () {
      expect(castArray(undefined)).to.have.members([undefined])
   });
})