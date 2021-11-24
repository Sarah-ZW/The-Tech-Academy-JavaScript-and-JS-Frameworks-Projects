// Print "Hello World"
// Every second
// And stop after 5 times

// After 5 times. Print "Done" and let Node exit.




var counter = 0;

const time = setInterval( () => {
    console.log('Hello World');
    counter+= 1;

    if (counter === 5) {
        console.log('Done')
        clearInterval(time);
    }
}, 1000);


