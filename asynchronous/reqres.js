// https://reqres.in/api/users/2

function successFunc(message){
    console.log(message);
}

function errorFunc(message) {
    console.log(message);
}

function fetchApi(url, error, success){
    let xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.send();
    xhr.onload = function (){
        if (xhr.status === 200){
            success(xhr.responseText);
        }else {
            error(xhr.responseText);
        }
    };
}

fetchApi("https://reqres.in/api/users/2", errorFunc, successFunc);