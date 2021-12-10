// Haetaan elementti button ja lisätään sille kuuntelija.
document.getElementById("sendbutton").addEventListener("click", message);

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

// HTTp request
let xmlhttp = new XMLHttpRequest();
xmlhttp.open("GET", "https://yesno.wtf/api/",true);
// send request
xmlhttp.send();

// create event handler
xmlhttp.onreadystatechange=function() {
    if(xmlhttp.readyState === 4 && xmlhttp.status === 200) {   
        let answerObject = JSON.parse(xmlhttp.response);
        document.getElementById("answer").innerHTML = answerObject.answer;
        document.getElementById("answer-image").setAttribute("src",answerObject.image);
    }
}

