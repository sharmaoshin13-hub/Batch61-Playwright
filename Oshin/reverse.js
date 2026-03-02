//i want to reverse 2 digits we will take out the reminder of the digits
//  wheather is first or last digit

// h = 67,  76


m1 = 67;
lastdigit = m1 % 10; // 7
m1 = m1 - lastdigit
firstdigit = m1 / 10; // 6

revNumber = lastdigit * 10 + firstdigit;
console.log(revNumber)