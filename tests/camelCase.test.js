
import chai from "chai"
import camelCase from "../src/camelCase.js"

const expect = chai.expect

describe("kameliTapaus", () =>{
   it("savutesti", () => {
      expect(camelCase('abc def ghi')).to.deep.equal('abcDefGhi')
   });
})