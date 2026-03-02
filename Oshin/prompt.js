
// Import the library
const prompt = require('prompt-sync')();

//prompt installed
//if we want to enter add any value to terminal
//package installed---- npm install prompt
// write promt first in the code
// if else
// Ask for input
    let num = prompt('Enter name: ');
    if(num % 2 == 0){
        console.log("Even");
    }else{
      console.log("Odd");
    }


    let numb1 = parseInt(prompt('Enter Number: '));// string
    let doubleThenumb = numb1 + numb1;

    console.log(doubleThenumb);


