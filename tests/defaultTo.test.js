
import chai from "chai"
import defaultTo from "../src/defaultTo.js"

const expect = chai.expect

describe("Tavallinen", () =>{
   it("savutesti", () =>{
      expect(defaultTo(1, 2)).to.deep.equal(1)
   });

   it("null", () =>{
      expect(defaultTo(null, 2)).to.deep.equal(2)
   });

   it("NaN", () =>{
      expect(defaultTo(NaN, 2)).to.deep.equal(2)
   });

   it("undefined", () =>{
      expect(defaultTo(undefined, 2)).to.deep.equal(2)
   });

   it("0", () =>{
      expect(defaultTo(0, 2)).to.deep.equal(0)
   });
})