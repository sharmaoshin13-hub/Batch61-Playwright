//Decrement
//--a predecrement ----decrement and then assignment of the value
//a-- postdecrement --- assigmnet and then decrement of the value
// a vale will be 6 how 
// --a => a =9
//--a => a=8
//a-- => returns 8, a = 7
//a--=> returns 7,
//  a =6

a = 10;
//a = a - 1

//b = --a + --a + a-- + a--
// 9 + 8 + 8 + 7 = 32


c = --a - --a + a-- - a--
//9 - 8 + 8 - 7 = 2
//--a => a =9
//--a => a=8
//a-- => returns 8, a = 7
//a--=> returns 7, 
// a =6
console.log(`a : ${a}`);
console.log(`a : ${c}`);