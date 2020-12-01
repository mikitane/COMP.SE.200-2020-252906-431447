
import chai from "chai"
import ceil from "../src/ceil.js"

const expect = chai.expect

describe("suurempi tai yhtasuuri", () =>{
   it("savutesti", () =>{
      expect(ceil(1.1)).to.deep.equal(2)
   });

   it("toinen parametri = 2", () =>{
      expect(ceil(1.1, 2)).to.deep.equal(1.11)
   });

   it("toinen parametri = 3", () =>{
      expect(ceil(1.1, 3)).to.deep.equal(1.101)
   });

   it("toinen parametri = -1", () =>{
      expect(ceil(1.1, -2)).to.deep.equal(10)
   });

   it("Number with precision of three rounded up to precision of two", function() {
      expect(ceil(10.111, 2)).to.be.equal(10.12);
   });

   it("Number with precision of two rounded up to precision of two", function() {
      expect(ceil(10.11, 2)).to.be.equal(10.11);
   });
})