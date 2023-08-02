import {Shape} from "../Assignment/Shape.js";
import {expect, test} from "@jest/globals";



test("shape", ()=>{
    let newShape: Shape = new Shape("circle");

    expect(newShape).toBe("circle")

});