
import chai from "chai"
import at from "../src/at.js"

const expect = chai.expect

describe("Oikeat arvot", () =>{
    it("savutesti", () => {
        expect(at({a:1, b:2, c:3}, ['a[0]', 'c[0]'])).to.have.ordered.members([1, 3])
    });
})