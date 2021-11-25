// 1
let sanat = ["one", "two", "three", "four", "five"];

taulu.forEach( sana => console.log(sana));

taulu.forEach(function(sana) {console.log(sana); } )

// 2
let prices = [24,50,100,68];

let discount = prices.map(price => 0.2*price);
console.log(discount);

// 3
let names = ["John", "Heikki", "John", "Haisuli"];
names = names.map(name => {
    if(name === "Jonh"){
        return "Matti"
    }
    return name;
});
//console.log(names);`


// 4
let numbers = [1,4,-3,-5,5,-20];

let positives = numbers.filter(number => number >= 0)

// 5
names = ["Timo", "Sara", "Lassi", "Tinderella", "Timoteus-Mikkonen"];
let modNames = names.filter(name => name.length>8 && name[0]==='T');

// 6
if(names.every(sana => sana.length>0)) {
    let pituus = names.map(sana => sana.length);

    let summa = pituus.reduce( (previous, current) => previous + current);
    console.log(summa);
}