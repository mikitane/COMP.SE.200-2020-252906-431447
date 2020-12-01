
import chai from "chai"
import endsWith from "../src/endsWith.js"

const expect = chai.expect

describe("Loppu merkki", () =>{
   it("savutesti", () =>{
      expect(endsWith('asdf', 'f')).to.deep.equal(true)
   });

   it("väärä merkki d", () =>{
      expect(endsWith('asdf', 'd')).to.deep.equal(false)
   });

   it("väärä merkki a", () =>{
      expect(endsWith('asdf', 'a')).to.deep.equal(false)
   });

   it("kolmas parametri 3", () =>{
      expect(endsWith('asdf', 'd', 3)).to.deep.equal(true)
   });

   it("kolmas parametri 1", () =>{
      expect(endsWith('asdf', 'a', 1)).to.deep.equal(true)
   });

   it("kolmas parametri 1 väärin", () =>{
      expect(endsWith('asdf', 's', 1)).to.deep.equal(false)
   });

   it("With dot in the end, single words", function() {
      expect(endsWith('Test.', '.')).to.be.true;
   });

   it("With dot in the end, sentence", function() {
      expect(endsWith('My test senctence.', '.')).to.be.true;
   });
})