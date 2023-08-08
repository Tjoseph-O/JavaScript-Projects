setTimeout(() => {
    console.log("In the set timeout function.");
}, 3000);

//OR

function callBack(){
    console.log("in the ");
}
setTimeout(callBack, 5000);


const fs = require("fs");
fs.readFile("file.txt", "utf-8", (error, data) => {
    if (error === null){
        console.log(data);
    }else {
        console.log(error);
    }
});