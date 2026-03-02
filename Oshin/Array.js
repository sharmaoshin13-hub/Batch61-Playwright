//Array

//let studentMark = [80,88,55,76,60]; we can write it like this
let studentMark = new Array(80,88,55,76,60);// second way for printing the values
studentMark [2]= 100; // update value 2 which is 55 now its 100
console.log(studentMark);

//Array index always start from 0 (ex-0,1,2.....)

//------Method(Push,Shift,POP,Unshift)-------

//studentMark.push(75); // ADDING VALUE AT LAST
//studentMark.unshift(60);// ADDING VALUE AT FIRST
//studentMark.pop()// REMOVING THE LAST VALUE
//studentMark.shift();//REMOVING FIRST VALE
//console.log(studentMark);

// how to iterrate IN JAVASCRIPT?
// 1st method
console.log("=====iteration=====")
for (let i = 0; i < studentMark.length ; i++){
console.log(studentMark[i]);
}
//second way
//for (const Mark of studentMark);
//console.log(mark);