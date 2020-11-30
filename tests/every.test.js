
import chai from "chai"
import every from "../src/every.js"

const expect = chai.expect

describe("Läpäiseekö jokainen", () =>{
   it("savutesti", () =>{
      expect(every([1, 2, 3], Number)).to.deep.equal(true)
   });
})