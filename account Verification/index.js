// console.log("working....");
//
//
// XMLHttpRquest
// Axios
// Fetch Function

// let accountNumber = "0110302460"
// let bank = "032"
//
// const xhr  = new XMLHttpRequest();
// xhr.open("GET", `https://api.paystack.co/bank/resolve?account_number=${accountNumber}&bank_code=${bank}`);
// // xhr.open("GET", `https://api.paystack.co/bank`)
// xhr.setRequestHeader("Authorization","Bearer sk_test_0b3a82a6f0e291ec427c2b45b28ad94d2c1afdc8")
// xhr.send();
// xhr.onload = function () {
//     try{
//         let {account_name} = JSON.parse(xhr.response).data
//         console.log("Account Name", account_name)
//     }catch (error) {
//         console.log(error)
//     }
// }
/*
for the list of banks...
 */









//
//     if (xhr.status === 200){
//         // DESTRUCTURING
//         const data = JSON.parse(xhr.response).data
//         const {email, first_name, last_name} = data
//
//         console.log("Email", email)
//         console.log("Lastname", last_name)
//         console.log("Firstname", first_name)
//
//     }else {
//         console.log(xhr.responseText)
//     }
// }

// import axios from "axios";
// const response = axios.get("https://reqres.in/api/users/2")

