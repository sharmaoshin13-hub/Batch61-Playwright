//find the sum of two numbers
//15 = 1 + 5 = 6
//135 = 1 + 3 + 5 = 9
//12721 = 1 + 2 + 7 + 2 + 1 = 13

let num = 15;
let num1 = 135;
let num2 = 12721;

// Split the number into digits
let digits = num.toString().split('').map(Number);
let digits1 = num1.toString().split('').map(Number);
let digits2 = num2.toString().split('').map(Number);

// Add them together
let sum = digits[0] + digits[1];
let sum1 = digits1[0] + digits1[1] + digits1[2];
let sum2 = digits2[0] + digits2[1] + digits2[2] + digits2[3] + digits2[4];

//print
console.log(`${digits[0]}+${digits[1]}=${sum}`);
console.log(`${digits1[0]}+${digits1[1]}+${digits1[2]}=${sum1}`);
console.log(`${digits2[0]}+${digits2[1]}+${digits2[2]}+${digits2[3]}+${digits2[4]}=${sum2}`);

//toString() - makes the number into text.

//split('') -cuts the text into pieces.

//map(Number) - turns each piece back into a number.