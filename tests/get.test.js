
import chai from "chai"
import get from "../src/get.js"

const expect = chai.expect

describe("get", function () {
   const olio = {'a':1, 'b':2, 'c':3};
   it("smoke", function () {
      expect(get(olio, 'b')).to.deep.equal(2)
   });

   it("empty object", function () {
      expect(get({}, 'b', 'default')).to.deep.equal('default')
   });

   it("Array 1", function () {
      expect(get(olio, ['b'], 'default')).to.deep.equal(2)
   });

   it("Array 2", function () {
      expect(get(olio, ['b', '1'], 'default')).to.deep.equal('default')
   });

   it("null", function () {
      expect(get(null, ['b'], 'default')).to.deep.equal('default')
   });
})