class Shape {
    constructor(name) {
        this._name = name;


        this.getName = ()=>{
            return this._name
        }
    }


    // get name() {
    //     return this._name;
    // }
}
module.exports = {Shape};