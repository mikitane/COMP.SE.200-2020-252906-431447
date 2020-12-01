
import chai from "chai"
import get from "../src/get.js"

const expect = chai.expect

describe("Alkion palauttaja", () =>{
   const olio = {'a':1, 'b':2, 'c':3};
   it("savutesti", () =>{
      expect(get(olio, 'b[0]')).to.deep.equal(2)
   });

   it("tyhjä olio", () =>{
      expect(get({}, 'b[0]', 'default')).to.deep.equal('default')
   });

   it("taulukko parametrina", () =>{
      expect(get(olio, ['b', '0'], 'default')).to.deep.equal(2)
   });

   it("taulukko parametrina väärin", () =>{
      expect(get(olio, ['b', '1'], 'default')).to.deep.equal('default')
   });
})