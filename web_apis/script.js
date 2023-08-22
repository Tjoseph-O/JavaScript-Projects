console.log("working.....")

let form = document.getElementById("forms_in");
form.addEventListener("submit", (event) =>{
    event.preventDefault();
    listOfCodes()
})
function listOfBanks() {
    let xml = new XMLHttpRequest();
    xml.open("GET", "https://api.paystack.co/bank");
    xml.setRequestHeader("Authorization","Bearer sk_test_0b3a82a6f0e291ec427c2b45b28ad94d2c1afdc8");
    xml.send();
    xml.onload = function (){
        let getBankName = JSON.parse(xml.response).data;
        for (let bankName = 1; bankName < getBankName.length; bankName++) {
            let {name,id} = getBankName[bankName];
            let selected = document.createElement("option");
            selected.innerHTML = name;
            document.getElementById("bankNames").appendChild(selected);

            let {code} = getBankName[bankName];

        }
    }
}
listOfBanks()

let listOfCodes = () => {
    let userOption = document.querySelector("select").value;
    let xml = new XMLHttpRequest();
    xml.open("GET", "https://api.paystack.co/bank");
    xml.setRequestHeader("Authorization","Bearer sk_test_0b3a82a6f0e291ec427c2b45b28ad94d2c1afdc8");
    xml.send();
    xml.onload = function () {
        let  getBankCode = JSON.parse(xml.response).data;
        for (let bank of getBankCode){
            if (bank.name === userOption){
                nameOfAccountHolder(bank.code);
            }
        }
        // for (let bankCode = 0; bankCode < getBankCode.length; bankCode++) {
        //     let {code} = getBankCode[bankCode];
        // }
    }
}

let nameOfAccountHolder = (code) => {

    let accountNumber = document.getElementById("input_account_number").value;
    // let bank = listOfCodes();
    const xhr  = new XMLHttpRequest();
 xhr.open("GET", `https://api.paystack.co/bank/resolve?account_number=${accountNumber}&bank_code=${code}`);
    xhr.setRequestHeader("Authorization","Bearer sk_test_0b3a82a6f0e291ec427c2b45b28ad94d2c1afdc8")
 xhr.send();
 xhr.onload = function () {
     try{
         let {account_name} = JSON.parse(xhr.response).data
         document.getElementById("my_output").innerText = account_name;
         // console.log(account_name);
         // alert(account_name);

         console.log("Account Name", account_name);
     }catch (error) {
         console.log(error)
     }
 }

}
// listOfBanks()


