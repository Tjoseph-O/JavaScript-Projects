
const { beforeEach } = require("@jest/globals");
const {multiply} = require("../introduction/sum.js")

beforeEach(() => {
    console.log("Hello")
});

describe("testing another func in sum",()=> {
    test("test 3 * 2 equal 6", () => {
        expect(multiply(3, 2)).not.toBe(7);
        expect(multiply(5, 2)).toBe(6);
        expect(multiply(5, 2)).toEqual(6);

    
    });
    });