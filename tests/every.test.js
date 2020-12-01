
import chai from "chai"
import every from "../src/every.js"

const expect = chai.expect

describe("Läpäiseekö jokainen", () =>{
   it("savutesti", () =>{
      expect(every([1, 2, 3], Number)).to.deep.equal(true)
   });

   it("Boolean väärin", () =>{
      expect(every([1, 2, 3], Boolean)).to.deep.equal(false)
   });

   it("Boolean oikein", () =>{
      expect(every([true, false, true], Boolean)).to.deep.equal(true)
   });

   it("String", () =>{
      expect(every(['1', '2', '3'], String)).to.deep.equal(true)
   });
})