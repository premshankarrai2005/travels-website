/*let Dom=document.body;
console.log(Dom);
let newBtn=document.createElement("BUTTON")
newBtn.innerText=("Click me")
console.log(newBtn)

document.querySelector("div").prepend(newBtn)*/
// div.prepend(newBtn)
//  console.log(Btn)
// let div=document.querySelectorAll("div")
// console.log(div)
// div.firstElementhild.style.Color="Red"
Array.from(document.getElementsByTagName("li")).forEach((elements)=>{
    elements.style.background="red";
});