
import chai from "chai"
import countBy from "../src/countBy.js"

const expect = chai.expect

describe("countBy", function () {
   const taulukkoA = [{'a': 1, 'b': 1}, {'a': 2, 'b': 2}];
   const taulukkoB = [{'a': 1, 'b': 1}, {'a': 2, 'b': 2}, {'a': 1, 'b': 1}, {'a': 2, 'b': 2}];

   it("smoke", function () {
      expect(countBy(taulukkoA, x => x.a)).to.include({1: 1, 2: 1})
   });

   it("empty array", function () {
      expect(countBy([], x => x.a)).to.include({})
   });

   it("test 3", function () {
      expect(countBy(taulukkoA, x => x.c)).to.include({})
   });

   it("test 4", function () {
      expect(countBy(taulukkoB, x => x.a)).to.include({1: 2, 2: 2})
   });

   it("With array of products, count number of same product", function() {
      const products = [
         { name: 'My Product 1', price: 10.24 },
         { name: 'My Product 2', price: 2.51 },
         { name: 'My Product 3', price: null },
         { name: 'My Product 1', price: 10.24 },
       ];

       expect(countBy(products, product => product.name)).to.deep.equal({'My Product 1': 2, 'My Product 2': 1, 'My Product 3': 1})
   });
})