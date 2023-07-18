// to do OOP in js by two ways which is , class base and prototype base

// OOP
//* prototype based -> construtor function
// Syntax is....
let vehicle = {wheels: 4};
let car = {
    seats: 4,
_proto_:vehicle,
};
let driver = {
    seats: 4,
    _proto_:car,};

console.log("car", car);
console.log("vehicle", vehicle);
console.log("car prototype", car._proto_);
console.log("vehicle prototype", vehicle._proto_);
console.log(car.wheels);
console.log(car.hasOwnProperty("seats"));
console.log(driver.wheels);
