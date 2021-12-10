// Lisätään kuuntelija painikkeelle
document.getElementById("send").addEventListener("click", addContent);

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

// Luodaan muuttuja, jota käytetään seuraavassa kohdassa.
let hover = document.getElementById("hover");

// Lisätään muuttujalle kuuntelija ja luodaan funktio, jossa asetetaan mouseoverille väri.
hover.addEventListener("mouseover", function(event){
    event.target.style.color = "red"

    // Palauttaa värin alkutilaan pienen viivästyksen jälkeen.
    setTimeout(function(){
        event.target.style.color = "";
    }, 500);
}, false);