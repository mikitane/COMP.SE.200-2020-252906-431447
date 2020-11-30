
import chai from "chai"
import capitalize from "../src/capitalize.js"

const expect = chai.expect

describe("Isokirjain", () =>{
   it("savutesti", () =>{
      expect(capitalize('qwerty')).to.deep.equal('Qwerty')
   });
})