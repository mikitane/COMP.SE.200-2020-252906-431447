
import chai from "chai"
import defaultToAny from "../src/defaultToAny.js"

const expect = chai.expect

describe("Tavallinen useita", () =>{
   it("savutesti", () =>{
      expect(defaultToAny(1, 2, 3)).to.deep.equal(1)
   });

   it("1 null", () =>{
      expect(defaultToAny(null, 2, 3)).to.deep.equal(2)
   });

   it("2 null", () =>{
      expect(defaultToAny(null, null, 3)).to.deep.equal(3)
   });

   it("3 null", () =>{
      expect(defaultToAny(null, null, null)).to.deep.equal(null)
   });

   it("1 undefined", () =>{
      expect(defaultToAny(undefined, 2, 3)).to.deep.equal(2)
   });

   it("2 undefined", () =>{
      expect(defaultToAny(undefined, undefined, 3)).to.deep.equal(3)
   });

   it("3 undefined", () =>{
      expect(defaultToAny(undefined, undefined, undefined)).to.deep.equal(undefined)
   });

   it("1 NaN", () =>{
      expect(defaultToAny(NaN, 2, 3)).to.deep.equal(2)
   });

   it("2 NaN", () =>{
      expect(defaultToAny(NaN, NaN, 3)).to.deep.equal(3)
   });

   it("3 NaN", () =>{
      expect(defaultToAny(NaN, NaN, NaN)).to.deep.equal(NaN)
   });

   it("NaN ja undefined", () =>{
      expect(defaultToAny(NaN, undefined, 3)).to.deep.equal(3)
   });

   it("NaN ja null", () =>{
      expect(defaultToAny(NaN, null, 3)).to.deep.equal(3)
   });

   it("null ja undefined", () =>{
      expect(defaultToAny(null, undefined, 3)).to.deep.equal(3)
   });

   it("null, undefined ja NaN", () =>{
      expect(defaultToAny(null, undefined, NaN)).to.deep.equal(NaN)
   });

   it("merkkejä", () =>{
      expect(defaultToAny('a', 'b', 'c')).to.deep.equal('a')
   });
})