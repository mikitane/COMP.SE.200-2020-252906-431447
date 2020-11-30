
import chai from "chai"
import defaultToAny from "../src/defaultToAny.js"

const expect = chai.expect

describe("Tavallinen useita", () =>{
   it("savutesti", () =>{
      expect(defaultToAny(1, 2, 3)).to.deep.equal(1)
   });
})