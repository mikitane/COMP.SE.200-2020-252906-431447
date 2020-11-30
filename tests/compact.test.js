
import chai from "chai"
import compact from "../src/compact.js"

const expect = chai.expect

describe("Puhdistettu taulukko", () =>{
   it("savutesti", () =>{
      expect(compact([0, 1, 2, 3])).to.have.ordered.members([1, 2, 3])
   });
})