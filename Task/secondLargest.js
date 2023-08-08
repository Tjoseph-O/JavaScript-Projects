var secondLargest = function(num) {
    let first = -1,
        second = -1;
    for (let i = 0; i < num.length; ++i) {
        let large =  +num.charAt(i);
        if (Number.isInteger(large)) {
            if (first < large) {
                second = first;
                first = large;
            } else if (second < large && large < first) {
                second = large;
            }
        }
    }
    return second;
};
console.log(secondLargest("dfa12321afd"))
console.log(secondLargest("abc1111"))
console.log(secondLargest("ck077"))
console.log(secondLargest("sjhtz8344"))
console.log(secondLargest("xyz"))