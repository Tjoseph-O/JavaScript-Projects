// word! = 'abc'
// word@ = 'pqr'
// output = 'apbqcr.



let word = "abc"
let word2 = "pqr"
let empty = " "

for (let index = 2; index < word.length; index++) {
    console.log(word);
    for (let ind = word2; ind < word2.length; ind++) {
        for (let dex = index[0]; dex < word2.length[0] ; dex++) {
            console.log(dex[0]);
        }
    }
    console.log(word2);
}