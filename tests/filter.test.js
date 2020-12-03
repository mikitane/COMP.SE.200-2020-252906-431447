
import chai from "chai"
import filter from "../src/filter.js"

const expect = chai.expect

describe("filter", function () {
   const kayttajat = [ { 'user': 'barney', 'active': true },
                   { 'user': 'fred', 'active': false }];

   const kayttajatA = [{ 'user': 'aaa', 'number': 1, 'active': true },
                        { 'user': 'bbb', 'number': 2, 'active': true },
                        { 'user': 'ccc', 'number': 3, 'active': false },
                        { 'user': 'ddd', 'number': 4, 'active': false }];
   const kayttajatT = [{}];
                   
   it("smoke", function () {
      expect(filter(kayttajat, ({active}) => active)).to.have.deep.members([{ 
         'user': 'barney', 'active': true }])
   });

   it("empty object", function () {
      expect(filter(kayttajatT, ({active}) => active)).to.have.deep.members([])
   });

   it("test 3", function () {
      expect(filter(kayttajat, ({user}) => (user === 'barney'))).to.have.deep.members([
         {'user': 'barney', 'active': true }])
   });

   it("test 4", function () {
      expect(filter(kayttajatA, ({active}) => (active === true))).to.have.deep.members([
         { 'user': 'aaa', 'number': 1, 'active': true },
         { 'user': 'bbb', 'number': 2, 'active': true }])
   });

   it("test 5", function () {
      expect(filter(kayttajatA, ({active, number}) => ((active === true),(number === 1)))).to.have.deep.members([
         { 'user': 'aaa', 'number': 1, 'active': true }])
   });

   it("null", function () {
      expect(filter(null, ({active}) => (active === true))).to.be.null
   });

   const products = [
      { name: 'My Product 1', price: 10.24 },
      { name: 'My Product 2', price: 2.51 },
      { name: 'My Product 3', price: null },
   ];

   it("With array of products, filter matching price", function() {
      expect(filter(products, ({price}) => price === 2.51)).to.have.deep.members([{ name: 'My Product 2', price: 2.51 }]);
   });

   it("With array of products, filter not matching price", function() {
      expect(filter(products, ({price}) => price === 3.51)).to.be.empty;
   });
})