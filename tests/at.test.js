
import chai from "chai"
import at from "../src/at.js"

const expect = chai.expect

describe("at", function () {
   const olioA = {a:1, b:2, c:3};
   it("smoke", function ()  {
      expect(at(olioA, ['a', 'c'])).to.have.ordered.members([1, 3])
   });

   it("empty path", function () {
      expect(at(olioA, [])).to.have.ordered.members([])
   })

   it("empty object", function () {
      expect(at({}, ['a'])).to.have.ordered.members([])
   })
})