
import chai from "chai"
import castArray from "../src/castArray.js"

const expect = chai.expect

describe("taulukko", () =>{
   it("savutesti", () =>{
      expect(castArray('qwe')).to.have.members(['qwe'])
   });

   it("tyhjä merkkijono", () =>{
      expect(castArray('')).to.have.members([''])
   });
   
})