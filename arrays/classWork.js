var arr = new Array(5, 4, "5");
var arr1 = [1, 2, 3, 4, 5];


arr.push("hello");
console.log(arr);

arr.pop();

arr.shift();
console.log(arr);
arr.unshift("Hiii");


var arr2 = arr.concat(arr1);
console.log(arr2);


var result = arr2.slice();
console.log("arr2 - ", arr2);
console.log("Slice - ",result);




