let p = document.querySelector("p");
document.querySelector("button").addEventListener("click", buttonClick2);

let input = document.querySelector("input");

function buttonClick (){
    p.classList.toggle("colored");
}

function buttonClick2 (){
    p.style.backgroundColor = input.value;
}


let items = document.querySelectorAll("li");

for (const i of items) {
   if (i.textContent.includes("important")){
       i.classList.add("important");
   }
}