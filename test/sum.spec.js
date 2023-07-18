// import { sum } from "../introduction/sum.js";

const { describe, test } = require("@jest/globals");
const {sum} = require("../introduction/sum.js")

describe("testing the sum folder",()=> {
test("that 5 + 3 equals 8", () =>{
    expect(sum(5, 3)).toBe(8);

});
});

