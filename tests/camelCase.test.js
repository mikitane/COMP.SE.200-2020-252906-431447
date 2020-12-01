
import chai from "chai"
import camelCase from "../src/camelCase.js"

const expect = chai.expect

describe("kameliTapaus", () =>{
   it("savutesti", () => {
      expect(camelCase('abc def ghi')).to.deep.equal('abcDefGhi')
   });

   it("yksi sana", () =>{
      expect(camelCase('abc')).to.deep.equal('abc')
   });

   it("tyhjä merkkijono", () =>{
      expect(camelCase('')).to.deep.equal('')
   });

   it("isoja kirjaimia", () =>{
      expect(camelCase('ABC')).to.deep.equal('abc')
   });

   it("valmis", () => {
      expect(camelCase('abcDefGhi')).to.deep.equal('abcDefGhi')
   });
})