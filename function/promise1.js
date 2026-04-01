


let p1 = new Promise((resolve, reject) => {
    console.log("Infosys");

    let i = true;
    if (i == true) {
        resolve("Promise resolved");
    } else {
        reject("Promise rejected");
}
});


    p1.then((result) => {
        console.log("it seems you got selected")
        console.log(result);
    }).catch((result) => {
console.log("it seems you got rejected")
        console.log(result);
    
});