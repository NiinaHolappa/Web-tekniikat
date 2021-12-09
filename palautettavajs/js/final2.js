// Lisätään kuuntelija painikkeelle
document.querySelector("button").addEventListener("click", addContent);

// Tallennetaan tiedot muuttujiin
let body = document.querySelector("body");
let operator = document.getElementById("fullName");
let message = document.getElementById("textArea");

// Luodaan funktio addContent 
function addContent() {
    let h3 = document.createElement("h3");
    h3.textContent = operator.value + " " + new Date().toLocaleString();

    let p = document.createElement("p");
    p.textContent = message.value;

    article.append(h3, p);
}