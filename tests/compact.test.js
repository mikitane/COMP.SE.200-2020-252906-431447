
import chai from "chai"
import compact from "../src/compact.js"

const expect = chai.expect

describe("Puhdistettu taulukko", () =>{
   it("savutesti", () =>{
      expect(compact([0, 1, 2, 3])).to.have.ordered.members([1, 2, 3])
   });

   it("tyhjä taulukko", () =>{
      expect(compact([])).to.have.ordered.members([])
   });

   it("valmiiksi puhdas", () =>{
      expect(compact([1, 2, 3])).to.have.ordered.members([1, 2, 3])
   });

   it("täysin likainen", () =>{
      expect(compact([0, false, '', null])).to.have.ordered.members([])
   });
})