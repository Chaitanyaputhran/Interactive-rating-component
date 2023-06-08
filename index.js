const sub=document.querySelector(".submit");
const first=document.querySelector(".first-page");
const second=document.querySelector(".second-page");
const text=document.querySelector(".thanks");
const buttons = document.querySelectorAll(".button");
buttons.forEach(button => {
  button.addEventListener('click', () => {
    button.classList.add('clicked');
  });
});
second.classList.add("hide");
let number

function one(){
    number=1
  
    return number
}
function two(){
    number=2
    return number
}
function three(){
    number=3
    return number
}
function four(){
    number=4
    return number
}
function five(){
    number=5
    return number
}
sub.addEventListener("click",function(){
    second.classList.remove("hide");
    first.classList.add("hide");
    text.innerText = "You selected"+" "+number+" "+"out of 5"
    
   

})



