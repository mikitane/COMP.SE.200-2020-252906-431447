
import chai from "chai"
import at from "../src/at.js"

const expect = chai.expect

describe("Oikeat arvot", () =>{
   const olioA = {a:1, b:2, c:3};
   it("savutesti", () => {
      expect(at(olioA, ['a[0]', 'c[0]'])).to.have.ordered.members([1, 3])
   });

   it("tyhjä polku", () =>{
      expect(at(olioA, [])).to.have.ordered.members([])
   })

   it("tyhjä olio", () =>{
      expect(at({}, ['a[0]'])).to.have.ordered.members([])
   })
})