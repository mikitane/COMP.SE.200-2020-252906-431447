
import chai from "chai"
import capitalize from "../src/capitalize.js"

const expect = chai.expect

describe("Isokirjain", () =>{
   it("savutesti", () =>{
      expect(capitalize('qwerty')).to.deep.equal('Qwerty')
   });

   it("tyhjä merkkijono", () =>{
      expect(capitalize('')).to.deep.equal('')
   });

   it("valmiiksi iso kirjain", () =>{
      expect(capitalize('Qwerty')).to.deep.equal('Qwerty')
   });

   it("kaikki isoja kirjaimia", () =>{
      expect(capitalize('QWERTY')).to.deep.equal('Qwerty')
   });
})