
import chai from "chai"
import get from "../src/get.js"

const expect = chai.expect

describe("Alkion palauttaja", () =>{
   it("savutesti", () =>{
      expect(get({'a':1, 'b':2, 'c':3}, 'b[0]')).to.deep.equal(2)
   });
})