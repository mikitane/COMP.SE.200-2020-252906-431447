
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
})