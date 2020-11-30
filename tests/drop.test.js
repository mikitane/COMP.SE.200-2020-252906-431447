
import chai from "chai"
import drop from "../src/drop.js"

const expect = chai.expect

describe("Alkioiden pudottaja", () =>{
   it("savutesti", () =>{
      expect(drop([1, 2, 3])).to.have.ordered.members([2, 3])
   });
})