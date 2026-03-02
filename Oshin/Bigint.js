// It is use to store very large whole number like in billions in record
//Performance is critical and fractional values are not required.
//RANGE--------(-9007199254740991 to 9007199254740991 )memory size = 64 bit value
//TYPE-------- Integer (whole numbers only)
//STORAGE---------Fixed 8 bytes
//USE CASE----------Large counts (IDs, population, transaction numbers)
//PERFORMANCE-------Faster for integer operations
//------------------------------------------------------------------------------------

console.log(Number.MAX_SAFE_INTEGER);

h1 = Number.MAX_SAFE_INTEGER + 2
h2 = Number.MAX_SAFE_INTEGER - 9

console.log(h1 == h2);

a = 12n;
console.log(typeof a);
b = 34n;
c = BigInt("10");
d = a + b * c;
console.log(b);
console.log(typeof b);
console.log(typeof c);
console.log(d);
