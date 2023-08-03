// import {Shape} from "../Assignment/Shape.js";
// import {expect, test} from "@jest/globals";
const {Shape} = require("../Assignment/Shape.js")



test("shape", ()=>{
    let newShape = new Shape("circle");

    expect(newShape.getName()).toBe("circle")

});