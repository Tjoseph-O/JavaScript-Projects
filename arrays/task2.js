let word = "abc"
let indices = [0,1,2]
let pouring = [""]

for (let index = 0;index <indices.length; index++){
    let holder = indices[index]
    for (let index2 = 0;index2 < indices.length; index2++){
        pouring = word[holder]
    }
    console.log(pouring)
}