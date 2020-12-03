
import chai from "chai"
import ceil from "../src/ceil.js"

const expect = chai.expect

describe("ceil", function () {
   it("smoke", function () {
      expect(ceil(1.1)).to.deep.equal(2)
   });

   it("1.1, 1", function () {
      expect(ceil(1.1, 1)).to.deep.equal(1.1)
   });

   it("1.1, 2", function () {
      expect(ceil(1.1, 2)).to.deep.equal(1.10)
   });

   it("1.1, 3", function () {
      expect(ceil(1.1, 3)).to.deep.equal(1.100)
   });

   it("1.1, 0", function () {
      expect(ceil(1.1, 0)).to.deep.equal(2)
   });

   it("1.1, -1", function () {
      expect(ceil(1.1, -1)).to.deep.equal(10)
   });

   it("1.1, -2", function () {
      expect(ceil(1.1, -2)).to.deep.equal(100)
   });

   it("1.101, 1", function () {
      expect(ceil(1.101, 1)).to.deep.equal(1.2)
   });

   it("1.101, 2", function () {
      expect(ceil(1.101, 2)).to.deep.equal(1.11)
   });

   it("1.101, 3", function () {
      expect(ceil(1.101, 3)).to.deep.equal(1.101)
   });

   it("1.101, 0", function () {
      expect(ceil(1.101, 0)).to.deep.equal(2)
   });

   it("1.101, -1", function () {
      expect(ceil(1.101, -1)).to.deep.equal(10)
   });

   it("-1.101, -1", function () {
      expect(ceil(-1.101, -1)).to.deep.equal(0)
   });

   it("1.101, -1", function () {
      expect(ceil(-1.101)).to.deep.equal(-1)
   });

   it("1.101, -1", function () {
      expect(ceil(-1.101, 1)).to.deep.equal(-1.1)
   });

   it("Number with precision of three rounded up to precision of two", function() {
      expect(ceil(10.111, 2)).to.be.equal(10.12);
   });

   it("Number with precision of two rounded up to precision of two", function() {
      expect(ceil(10.11, 2)).to.be.equal(10.11);
   });
})