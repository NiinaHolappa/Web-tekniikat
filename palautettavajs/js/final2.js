document.querySelector("button").addEventListener("click", addContent);

let body = document.querySelector("body");
let operator = document.getElementById("fullName");
let message = document.getElementById("textArea");


function addContent() {
    let h3 = document.createElement("h3");
    h3.textContent = operator.value + " " + new Date().toLocaleString();

    let p = document.createElement("p");
    p.textContent = message.value;

    article.append(h3, p);
}