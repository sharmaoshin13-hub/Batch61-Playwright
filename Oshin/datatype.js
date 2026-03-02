//number, whole numbers and floating number
//a = Number(12); ---- object way(-  when you want a precise numeric conversion 
// (including decimals) and expect the whole string to be a valid number.
//Input Handling----Converts the entire value; if invalid, returns NaN
//Decimals---------Truncates decimals (e.g., "10.9" → 10)
//EXamples------Number("123abc") → NaN <br> Number("10.9") → 10.9


//a = parseInt(13);-------Method way(- when you want to extract an integer from a 
// string, especially if the string may contain extra characters or you need to specify
//  a base (like binary or hex).
//Input Handling------Reads a string until it hits a non-numeric character
//Decimals------Keeps decimals (e.g., "10.9" → 10.9)
//Examples---parseInt("123abc") → 123 <br> parseInt("10.9") → 10

//a = 10; ----- Lateral way




//a = Number("12xx");
//a = parseInt("1abc")
//b = a + 20;
//console.log(b);


a = 22.2;
b = parseInt(4);
c = b + a;
console.log(c);





