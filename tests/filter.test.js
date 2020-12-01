
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
})