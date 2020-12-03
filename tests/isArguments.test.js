
import chai from "chai"
import isArguments from "../src/isArguments.js"

const expect = chai.expect

describe("isArguments", function () {
   it('With function returning arguments', function () {
     const _isArguments = isArguments(function() { return arguments }())
     expect(_isArguments).to.be.true;
   });

   it('With array of integers', function () {
     const _isArguments = isArguments([1, 2])
     expect(_isArguments).to.be.false;
   });
})
