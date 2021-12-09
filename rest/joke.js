function jokeOfTheDay() {
    let xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange=function() {
        if (this.readyState == 4 && this.status == 200) {
            let joke = JSON.parse(this.response)
            // Access the result here
            document.getElementById("joke").innerHTML =  joke.contents.jokes[0].joke.text;
         }
    };
    xmlhttp.open("GET", "https://api.jokes.one/jod?category=animal", true);
    xmlhttp.setRequestHeader("Content-type", "application/json");
    xmlhttp.setRequestHeader("X-JokesOne-Api-Secret", "YOUR API HERE");
    xmlhttp.send();
}

jokeOfTheDay();