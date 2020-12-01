
import chai from "chai"
import isArguments from "../src/isArguments.js"

const expect = chai.expect

describe("onko argumentti olio", () =>{
   it('With function returning arguments', function () {
     const _isArguments = isArguments(function() { return arguments }())
     expect(_isArguments).to.be.true;
   });

   it('With array of integers', function () {
     const _isArguments = isArguments([1, 2])
     expect(_isArguments).to.be.false;
   });
  
   it("savutesti", () =>{
      expect(isArguments(function() { return arguments }())).to.deep.equal(true)
   });

   it("väärin", () =>{
      expect(isArguments([1, 2, 3])).to.deep.equal(false)
   });
})
