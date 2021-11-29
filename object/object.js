let kurssit = [];

document.querySelector("button").addEventListener("click", lisääKurssi);
document.getElementById("show").addEventListener("click", showAll);

function lisääKurssi() {
    let kNimi = document.getElementById("kurssi").value;
    let osallistujaMaara = document.getElementById("osallistujat").value;


let tiedot = {
        kurssiNimi: kNimi,
        maara: osallistujaMaara
    }

    kurssit.push(tiedot);
    
}

function showAll() {
    kurssit.forEach( kurssi => {
        let li = document.createElement("li");
        li.textContent = "Kurssi " + kurssi.kurssiNimi + " On " + kurssi.osallistujaMaara + " oppilaita rekistöröinyt";
        
        document.querySelector("ul").appendChild(li);
    });
}