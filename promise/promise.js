function func(resolve, reject) {
    setTimeout(() =>{
        console.log("in the setTiemout function")
        resolve("Resolving......")
    }, 2000)
}

function callBack(value) {
    console.log("In the callback function")
    console.log(value)
}

let promise = new promise(func)
promise.then(callBack)


// promise & promise chaining - Article [Assignment]