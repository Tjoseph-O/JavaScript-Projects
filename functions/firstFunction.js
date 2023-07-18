// function factorial(value){
//     let answer = 1;
//     for(let i = value; i > 0; i--){
//         answer *=i;
//     }
//     return Sum(answer);
// }



// nexted

// let 

// function factorial(value){
//     let answer = 1;
//     for (let i = value; i > 0; i--){
//         answer *= i;
//     }
//     function sum(val){
//         return val + 25;

//     }
//     return sum(answer);
// }
// console.log(factorial(5))

// function as an expression





// Arrow function

// function sum(a, b){
//     return a + b;
// };

// console.log(sum(2, 3));



// let sum (a, b) =>{
//     return a + b;
// };

// console.log(sum(2, 3));


// let sum = () => 5 + 25;
// console.log(sum());


// function as an agument..you can pass in
// a function to another function as an argument..




// setTimeout(() => {
//     console.log("hello")

// },5000);


//   function addition (sum,val){
//     function sum(func,val){
//         let result = addition;
//  }
// }
// console.log(result)

// function fun (){
//     return"ooop";
// }

// function addition(){
//     return fun;
// }
// let obj = addition();
// console.log(obj())

function func(){
    return () => {
        return "Hello World";
    };
}
let variable = func();
console.log(variable());

