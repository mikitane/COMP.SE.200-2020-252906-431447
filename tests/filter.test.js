
import chai from "chai"
import filter from "../src/filter.js"

const expect = chai.expect

describe("Suodatin", () =>{
   it("savutesti", () =>{
      const kayttajat = [ { 'user': 'barney', 'active': true },
                   { 'user': 'fred',   'active': false }]
      expect(filter(kayttajat, ({active}) => active)).to.have.members([{ 'user': 'barney', 'active': true }])
   });
})