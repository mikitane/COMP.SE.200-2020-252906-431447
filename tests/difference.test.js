
import chai from "chai"
import difference from "../src/difference.js"

const expect = chai.expect

describe("Eroavuus", () =>{
   it("savutesti", () =>{
      expect(difference([1, 2, 3], [2, 3])).to.have.members([1])
   });
})