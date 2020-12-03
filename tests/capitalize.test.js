
import chai from "chai"
import capitalize from "../src/capitalize.js"

const expect = chai.expect

describe("capitalize", function () {
   it("smoke", function () {
      expect(capitalize('qwerty')).to.deep.equal('Qwerty')
   });

   it("(empty)", function () {
      expect(capitalize('')).to.deep.equal('')
   });

   it("Qwerty", function () {
      expect(capitalize('Qwerty')).to.deep.equal('Qwerty')
   });

   it("QWERTY", function () {
      expect(capitalize('QWERTY')).to.deep.equal('Qwerty')
   });

   it("qWERTY", function () {
      expect(capitalize('qWERTY')).to.deep.equal('Qwerty')
   });
})