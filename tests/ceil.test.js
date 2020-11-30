
import chai from "chai"
import ceil from "../src/ceil.js"

const expect = chai.expect

describe("suurempi tai yhtasuuri", () =>{
   it("savutesti", () =>{
      expect(ceil(1.1)).to.deep.equal(2)
   });
})