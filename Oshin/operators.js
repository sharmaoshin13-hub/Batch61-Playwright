//Operators
//*,/,+,-,%,**(Airthmetic)
//(Comparison)
//operands--15,5 are called as operands
//sum of 2 digits 

h = 67
lastdigit = h % 10;                     //  reminder is 7
console.log("Last digit :" + lastdigit) // reminder against 10 = will alway give you lastdigit
h = h - lastdigit                       //   67-7=60
console.log("First digit :" + (h/10))  // 
firstdigit = h/10; // 60/10=6

sum = firstdigit + lastdigit;
console.log("sum is " + sum);





a = 88
lastdigit = a % 10;  // reminder is 8
console.log("Last Number :" + lastdigit)
a = a + lastdigit // 88-8= 80
console.log("First Number :" + (a/10)) // 80/10=8

sum = firstdigit + lastdigit;
console.log("Sum is " + sum);