
import chai from "chai"
import endsWith from "../src/endsWith.js"

const expect = chai.expect

describe("Loppu merkki", () =>{
   it("savutesti", () =>{
      expect(endsWith('asdf', 'f')).to.deep.equal(true)
   });
})