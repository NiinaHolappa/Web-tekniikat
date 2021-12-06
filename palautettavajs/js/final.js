// Haetaan elementti button ja lisätään sille kuuntelija.
document.querySelector("button").addEventListener("click", message);

// Luodaan lista, johon tallenetaan halutut värit.  
let colors = ["#96B896", "#F4F2FA", "#E8FFE8", "#FFE4CF", "#BAAA9E"];

// Randomgeneraattori funktio arvoo satunaisen värin sivulle.
function random(colors) {
    return colors[Math.floor(Math.random() * colors.length)];
  }

// Funktio message näyttää alert-ilmoituksen, kun nappia painetaan ja sen jälkeen tyhjentää tekstikentän.
function message(){
    alert("Viesti lähetetty!");
    document.getElementById("inputField").value = "";
    // haetaan artikkeli sen id:llä ja asetetaan siihen taustaväri, joka tulee randomgeneraattori funktiosta.
    document.getElementById("article").style.backgroundColor = random(colors);
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
