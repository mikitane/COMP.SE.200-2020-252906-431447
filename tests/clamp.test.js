
import chai from "chai"
import clamp from "../src/clamp.js"

const expect = chai.expect

describe("Raja", () =>{
   it("savutesti", () =>{
      expect(clamp(4, 1, 2)).to.deep.equal(2)
   });
})