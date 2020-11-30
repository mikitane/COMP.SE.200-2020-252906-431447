
import chai from "chai"
import divide from "../src/divide.js"

const expect = chai.expect

describe("Jakolasku", () =>{
   it("savutesti", () =>{
      expect(divide(4, 2)).to.deep.equal(2)
   });
})