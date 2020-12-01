
import chai from "chai"
import chunk from "../src/chunk.js"

const expect = chai.expect

describe("chunk taulukko", () =>{
   it("savutesti", () =>{
      expect(chunk(['a', 'b', 'c', 'd', 'e'], 2)).to.have.ordered.members([['a', 'b'], 
      ['c', 'd'], ['e']])
   });

   it("toinen parametri = 1", () =>{
      expect(chunk(['a', 'b', 'c', 'd', 'e'], 1)).to.have.ordered.members([['a'], ['b'], 
      ['c'], ['d'], ['e']])
   });

   it("toinen parametri > pituus", () =>{
      expect(chunk(['a', 'b', 'c', 'd', 'e'], 6)).to.have.ordered.members([['a', 'b', 'c', 'd', 'e']])
   });
})