//it is use in agile
//for "story pointing" to estimate the complexity of tasks.
//sprint velocity--- that measures how much work a team can complete during a sprint 

//0 1 1 2 3 5 8 13 21 34
//0 + 1 = 1
// 1 + 1 = 2
// 2 + 3 = 5
// 5 + 8m = 13

// learn the logic c = a + b
//print c
//a = b
//b = nextnumber
//nextnumber = a

//let a = 0;
//let b = 1;

//console.log(a)
//console.log(b)

//let nextNumber = a + b;
//console.log(nextNumber);
//a = b;
//b = nextNumber;

//nextNumber = a;


// using while loop to get the fibonacci series
let a = 0;
let b = 1;

console.log(a);
console.log(b);
let nextNumber = 0;

while(nextNumber <= 100){
    nextNumber = a + b;
console.log(nextNumber);
a = b;
b = nextNumber;
}

