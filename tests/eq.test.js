
import chai from "chai"
import eq from "../src/eq.js"

const expect = chai.expect

describe("Yhtäsuuruus", () =>{
   it("savutesti", () =>{
      expect(eq('a', 'a')).to.deep.equal(true)
   });

   it("eri merkit", () =>{
      expect(eq('b', 'a')).to.deep.equal(false)
   });

   it("NaN", () =>{
      expect(eq(NaN, NaN)).to.deep.equal(true)
   });

   const olioA = {'a':1};
   const olioB = {'a':1};
   
   it("eri oliot", () =>{
      expect(eq(olioA, olioB)).to.deep.equal(false)
   });

   it("samat oliot", () =>{
      expect(eq(olioA, olioA)).to.deep.equal(true)
   });
})