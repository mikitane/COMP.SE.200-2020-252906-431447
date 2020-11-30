
import chai from "chai"
import defaultTo from "../src/defaultTo.js"

const expect = chai.expect

describe("Tavallinen", () =>{
   it("savutesti", () =>{
      expect(defaultTo(1, 2)).to.deep.equal(1)
   });
})