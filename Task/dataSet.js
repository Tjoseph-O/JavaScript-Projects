let emptyArray = [];
let first = [200,50,300,5];
let second = [10,25,7,100]
let third = [25,20,70,45]
let fouth = [500,170,11,35]






let firstRow = emptyArray.push(first);
let secondRow = emptyArray.push(second)
let thirdRow = emptyArray.push(third)
let fouthRow = emptyArray.push(fouth)

// let row = 0
// let startColom = 0
// let endColom = 2

// console.log(emptyArray[row].slice(startColom,endColom))

// console.table(emptyArray);


let prompt = require ('prompt-sync')()
let inputRow = Number(prompt("input a row"));
let inputStartColom = Number(prompt("input a Start Colom"))
let inputEndColom = Number(prompt("Enter a number for EndColom"))

console.log(emptyArray[inputRow].slice(inputStartColom,inputEndColom))