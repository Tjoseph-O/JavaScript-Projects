
   // let selector = document.querySelector(".button-container");
   // let button = document.querySelector("button")
   //  button.remove();
   //  console.log(selector);
   //  for (let index = 1; index <= 20; index++) {
   //      let botton = document.createElement("button");
   //      botton.id = index;
   //      botton.innerHTML = `Button #${index}`
   //      selector.appendChild(botton);
   //
   //      botton.addEventListener("click me", function (){
   //          alert(this.id);
   //      })
   //
   //  }

   let selector = document.querySelector(".button-container");
let firstButton = document.querySelector("button");
firstButton.remove();
// console.log(selector);
   for (let index = 1; index < 21; index++) {
       let eachButton = document.createElement("button");
       eachButton.id = index;
       eachButton.innerHTML = `Button #${index}`;
       selector.appendChild(eachButton);

       eachButton.addEventListener("click", function (){
           alert(this.id);
       })
   }