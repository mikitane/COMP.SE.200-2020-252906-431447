
import chai from "chai"
import countBy from "../src/countBy.js"

const expect = chai.expect

describe("Laskuri", () =>{
   it("savutesti", () =>{
      expect(countBy([{'a': 1, 'b': 1}, {'a': 2, 'b': 2}], x => x.a)).to.include({1: 1, 2: 1})
   });

   it("tyhjä taulukko", () =>{
      expect(countBy([], x => x.a)).to.include({})
   });

   it("tyhjä", () =>{
      expect(countBy([{'a': 1, 'b': 1}, {'a': 2, 'b': 2}], x => x.c)).to.include({})
   });
})