/* prefix of a word
s = "iloveleetcode"
words = ["i", "love", "leetcode","applies"]
output : true
*/



let s = "iloveleetcode";
let words = ["i", "love", "leetcode", "applies"];
 let empty = "";
 let count = 0;

 for (let index = 0; index < words.length; index++) {
    empty += words[index];
    console.log(empty)
 }

 for (let index = 0; index < s.length; index++) {

    if (empty == s[index]) {
    count++
 }
 if (s[index] === count) {
    console.log(true)
    
 }else
 console.log(false);
}
    
    
    
 