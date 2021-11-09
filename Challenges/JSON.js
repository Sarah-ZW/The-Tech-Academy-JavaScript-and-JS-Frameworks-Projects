var myObj = {name:"yoyo", age: 21, hunger: "great"};
var myJSON = JSON.stringify(myObj);
localStorage.setItem("savedStuff",myJSON);
console.log(myJSON);



text = localStorage.getItem("savedStuff"); //I think you need an html file to use localStorage

var JSONparse = JSON.parse(text);
console.log(JSONparse.name);