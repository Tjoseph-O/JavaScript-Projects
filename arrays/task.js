 let word = "codeleet"
 let indices = [4,5,6,7,0,2,1,3]
 let pouring = [""]

 for (let index = 0; index < indices.length; index++){
    let holder = indices[index]
    for (let index2 = 0; index2<indices.length; index2++){
        pouring = word[holder];
    }
  ProcessingInstruction.stdout.write(pouring)
 }


