//promise always give you a response
//in the place of resolve and reject we can use any name.

const p1 = new Promise((Oshin, jenny) => {
    console.log("abcd");

    let i = true;
    if (i == true) {
        Oshin("Promise resolved");
    } else {
        jenny("Promise rejected");
    }
});
//then() - when the promise is resolved
//catch() - when the promise is rejected
//fetch() - to fetch data from the server
p1.then((result) => {
    console.log("it seems you got selected")
    console.log(result);
}).catch((result) => {
    console.log("tell me your result")
    console.log(result);
});