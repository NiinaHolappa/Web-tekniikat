// a
let elementti = document.getElementById("content");
console.log(elementti.nodeName);

// b
let ekaBasic = document.querySelector(".basic");
console.log(ekaBasic.nodeName);

// c
let kaikkiItemit = document.getElementsByTagName("li");
for(i of kaikkiItemit){
    console.log(i.innerText);
}

// d
let body = document.querySelector("body");
let kaikkiNodet = body.querySelectorAll("*");

for(x of kaikkiNodet){
    console.log(x.nodeName);
}

// e
let article = document.querySelector("article");

for(j of article.querySelectorAll("p")){
    console.log("**" + j.textContent);
}

// f
for(i of kaikkiItemit){
    i.textContent = "John Doe"
}


