/* class based programming
if you want to make a code or info private, you say /var _/...
eg, var _name 
*/



class Account{
    constructor(name, email, bvn){
        this.name = name;
        this.email = email;
        this.bvn = bvn;
        this.myAccountNumber = this.accountNumber;
        this.accountNumber += 1;
    }
    set name(newName){
        this.name = newName;

    }

    get name(){
        return this.name

    }

    get accountNumber(){}


    generateAccountNumber(){}
    getDetails(){}

}

module.exports = {Account};