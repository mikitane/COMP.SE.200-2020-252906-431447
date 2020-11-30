
import chai from "chai"
import eq from "../src/eq.js"

const expect = chai.expect

describe("Yhtäsuuruus", () =>{
   it("savutesti", () =>{
      expect(eq('a', 'a')).to.deep.equal(true)
   });
})