// lisätään napin kuuntelijafunktio
document.querySelector("button").addEventListener("click", addNote);
let body = document.querySelector("body");
let userName = document.getElementById("name");
let note = document.getElementById("note");
let checkBox = document.getElementById("important");

function addNote () {
    // luodaan otsikko johon tulee nimi-kentästä nimi ja lisäksi aikaleima
    let h3 = document.createElement("h3");
    h3.textContent = userName.value + " " + new Date().toLocaleString();
    body.appendChild(h3);
    // note lisätään tekstinä p-elementtiin textareasta
    let p = document.createElement("p");
    p.textContent = note.value;
    // jos chechbox valittu > lisätään important muotoilu
    if(checkBox.checked) {
        h3.classList.add("important");
        p.classList.add("important");
    }
    // kaikki elementit uusina bodyn sisälle
    body.append(h3, p, document.createElement("hr"));
}