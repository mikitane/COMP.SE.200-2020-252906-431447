
import chai from "chai"
import add from "../src/add.js"

const expect = chai.expect

describe("summa", () =>{
   it("savutesti", () => {
      expect(add(2, 3)).to.deep.equal(5)
   });

   it("negatiiviset luvut", () => {
      expect(add(-3, -4)).to.deep.equal(-7)
   });
})