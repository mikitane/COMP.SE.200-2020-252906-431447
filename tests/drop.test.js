
import chai from "chai"
import drop from "../src/drop.js"

const expect = chai.expect

describe("Alkioiden pudottaja", () =>{
   it("savutesti", () =>{
      expect(drop([1, 2, 3])).to.have.ordered.members([2, 3])
   });

   it("tyhjä taulukko", () =>{
      expect(drop([], 2)).to.have.ordered.members([])
   });

   it("parametri = 1", () =>{
      expect(drop([1, 2, 3], 1)).to.have.ordered.members([2, 3])
   });

   it("parametri = 3", () =>{
      expect(drop([1, 2, 3], 3)).to.have.ordered.members([])
   });

   it("parametri > taulukko", () =>{
      expect(drop([1, 2, 3], 4)).to.have.ordered.members([])
   });

   it("parametri = 0", () =>{
      expect(drop([1, 2, 3], 0)).to.have.ordered.members([1, 2, 3])
   });

   it("parametri < 0", () =>{
      expect(drop([1, 2, 3], -1)).to.have.ordered.members([1, 2, 3])
   });
})