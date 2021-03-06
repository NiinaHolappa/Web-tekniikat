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


// Rest api from https://openweathermap.org/api
const app = {
    fetchWeather: (ev) => {
        let lat = "65.01236";
        let lon = "25.46816";
        let city = "643492";
        let key = "142c39ff43985960d1f30e5a9632630d";
        let lang = "fi";
        let units = "metric";
        let url = `http://api.openweathermap.org/data/2.5/onecall?appid=${key}&units=${units}&lang=${lang}&lat=${lat}&lon=${lon}`;
        fetch(url)
            .then(resp=>{
                if(!resp.ok) throw new Error(resp.statusText);
                return resp.json();
            })
            .then(data=>{
                app.shoWeather(data);
            })
            .catch(console.err);
    },
    shoWeather: (resp) => {
        console.log(resp);
        document.getElementById("temp").innerHTML = "Tuntuu kuin: " + resp.current.temp + " °C";
        document.getElementById("feels").innerHTML ="Lämpötila: " + resp.current.feels_like + " °C";
    }
}; 

app.fetchWeather();


