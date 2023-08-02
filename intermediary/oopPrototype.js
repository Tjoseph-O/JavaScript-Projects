    function Employee(name, phoneNumber, designation){
    this.name = name;
    this.phoneNumber = phoneNumber;
    this.designation = designation;

    this.printDetails = ()=> {
        return `My name is ${this.name} \nYou contact me via ${this.phoneNumber}.
        I am the ${designation} of Sulty bank`;
    };

    this.paySalary = ( )=> {
        let disbursementResponse = {
            isSuccessful: true,
            salary:this.salary,
             designation: this.designation,
        };
        if (this.designation === "manager"){
            this.salary = 5000000;
        }else if (this.designation === "cook"){
            this.salary = 2000;
        }else{
            disbursementResponse.salary = "Salary not assigned";
        }
        return disbursementResponse;

    };
    this.company = "Sulty Bank"
};

module.exports = {Employee};

// let employee1 = new Employee("joe Botsman", "+234444444", "manager");
// let employee2 = new Employee("Esther Botsman", "+234444444", "cook");

// Employee.prototype.isVerified = true;
// employee1.isAvailable = false;


// console.log(employee1._proto_=== employee2._proto_);
// console.log(employee1.company === employee2.company);
// console.log(employee1.printDetails());
// console.log(employee2.printDetails());
// console.log(employee1.isAvailable);
// console.log(employee2.isAvailable);
