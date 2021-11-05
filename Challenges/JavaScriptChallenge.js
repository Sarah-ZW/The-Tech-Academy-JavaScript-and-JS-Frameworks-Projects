let x = (1 | 2); //..00001 vs ..000010  if 1 of the bits is 1 make it 1
let y = (1 & 2);// if both bits are 1 then put 1
let z = (1 ^ 2); //if the bits are different put 1
document.getElementById("leaf").innerHTML = x + " :Or statement<br>"
+ y + " :And statement<br>" + z + " :XOR Statement ";

let textToReplace = "Find the waterfall snappy";
let replacement = textToReplace.replace(/snappy/i, "quickly");
let searchItem = "Not on my watch buddy";
let searchFind = searchItem.search(/Not/i,)
console.log(searchFind);
document.getElementById("textreplace").innerHTML = "replacement: " +
replacement;

try {
    let x = "1,2,3,4";
    x.split(' ');
    console.log(x);
}
catch(err) {
    
    document.getElementById("notquite").innerHTML = err.message;
}
finally {
    document.getElementById("notquite").innerHTML = "Find your happy place";
}

function strictly() {
    "use strict";
    piee=12;
    console.log(piee);//pie is not defined because we're in strict mode
}

let cucumber = {
    color:"green",
    taste:"bland",
    politicalView:"liberal",
    returncolor: function getColor() {
        return this.color;
    }
};
document.getElementById('colortime').innerHTML = cucumber.returncolor();

let yee = 22;
const dog = "throw me the ball " + yee;
console.log(dog);

let arrowtime = (arrowsFly) => "hello world " + arrowsFly;
document.getElementById("arrow").innerHTML = arrowtime("pushups");

class Food {
    constructor(type, name1, goodWith) {
    this.type = type;
    this.name1 = name1;
    this.goodWith = goodWith;
    }
}

let myFood = new Food("grain", "pasta", "spaghetti sauce");
console.log(myFood.type);

let toad = ["go", "get", "fly", "flew", "eat", "ate"]

for(let tu of toad) {
    if(tu === "fly")
    console.log("I found fly");
}

const letters = new Set();

letters.add("abc");
letters.add("badk");
console.log(letters);
console.log(letters.size);

function isPrime(num) {
    for (let i = 2; num > 1; i++) {
        if (num % i == 0) {
            return false
        }
        return num > 1;
    }
}

console.log([9,10,11,12,13,14].findIndex(isPrime));

const fruits = ['banana', 'apple', 'orange', 'strawberry'];

const answer = fruits.findIndex(fruit => fruit == 'orange');
console.log("The answer is index " + answer);

finalIndices = [];
var array1 = ['h', 'i', 'j', 'j', 'i', 'j'];
let jholder = 'j';
jindices = array1.indexOf(jholder);
while (jindices != -1) {
    finalIndices.push(jindices);
    jindices = array1.indexOf(jholder, jindices+1);
}

console.log(finalIndices);

document.getElementById("integ").innerHTML = Number.isInteger(22) + "<br>" +
Number.isInteger(5.5);

console.log(isFinite(10/0));

console.log(64 ** 5);

function validateForm() {
    let x = document.forms["myForm"]["fname"].value;
    if (x == "") {
        alert("name must be filled out");
        return false;
    }
}

function checkItOut() {
    let x = document.getElementById('checkMe');
    if(!x.checkValidity()) {
        document.getElementById('output').innerHTML = x.validationMessage;
    };
}