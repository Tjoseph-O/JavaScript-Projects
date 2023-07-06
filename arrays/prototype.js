
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

console.log();

var spResult = arr2.splice(2, 2);
console.log("splice -", arr2);
console.log("splice - ", spResult);

Array.prototype.lol = "haha";
Array.prototype.loml = "Temiii";
console.log(arr2.length);
console.log(arr2.lol);
console.log(arr1.lol);

Array.prototype.sum = function () {
    let total = 0;
    for (let i = 0; i < this.length; i++){
        total += this[i];
    }
    return total;
}





