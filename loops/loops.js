// 0 1 1 2 3 5 8 13 21

let first = 0;
let second = 1;
let temp = 0;

// process.stdout.write(`${first}, ${second},`);

// temp = second;
// first = first + second;
// second = temp + first;

// process.stdout.write(`${first}, ${second},`);
let len = 30
count = 0
while (count < len) {
temp = second;
first = first + second;
second = temp + first;
process.stdout.write(`${first}, ${second},`);
count+=1;
}