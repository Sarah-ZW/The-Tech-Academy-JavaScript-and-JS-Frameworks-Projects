/*

for (var i = 1; i<=3; i++) {
   (function(i) { setTimeout(function() {
        console.log(i + " second(s) elapsed");
    }, i*1000);
})(i);
}
*/

function init() {
    var name = 'Mozilla'; // name is a local variable created by init
    function displayName() { // displayName() is the inner function, a closure
      alert(name); // use variable declared in the parent function
    }
    displayName();
  }
  init();