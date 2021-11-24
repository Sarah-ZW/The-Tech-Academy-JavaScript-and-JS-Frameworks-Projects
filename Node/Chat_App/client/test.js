const object = { a: 1, b: 2, c: 3 };

for (const property in object) {
  console.log(`${property}: ${object[property]}`);
}

const yo = {name:'joe', age: 25 };
for(var key in yo) {console.log(yo[key]);}

let array1 = [1,2,3,4,5];
for(let num of array1) {
  console.log(num);
}