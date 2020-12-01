
import chai from "chai"
import filter from "../src/filter.js"

const expect = chai.expect

describe("Suodatin", () =>{
   const kayttajat = [ { 'user': 'barney', 'active': true },
                   { 'user': 'fred',   'active': false }];
   const kayttajatT = [{}];

   it("savutesti", () =>{
      expect(filter(kayttajat, ({active}) => active)).to.have.members([{ 'user': 'barney', 'active': true }])
   });

   it("tyhjä olio", () =>{
      expect(filter(kayttajatT, ({active}) => active)).to.have.members([])
   });

   it("With array of products, filter matching price", function() {
      const products = [
         { name: 'My Product 1', price: 10.24 },
         { name: 'My Product 2', price: 2.51 },
         { name: 'My Product 3', price: null },
       ];

       expect(filter(products, ({price}) => price === 2.51)).to.have.deep.members([{ name: 'My Product 2', price: 2.51 }]);
   });

   it("With array of products, filter not matching price", function() {
      const products = [
         { name: 'My Product 1', price: 10.24 },
         { name: 'My Product 2', price: 2.51 },
         { name: 'My Product 3', price: null },
       ];

       expect(filter(products, ({price}) => price === 3.51)).to.be.empty;
   });
})