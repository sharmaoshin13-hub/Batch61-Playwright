

function add (a,b,printfunction){;
let c = a + b;
printfunction(c);
}
add(10,20,printwithStar);
add(10,20,(content) => {
    console.log("***********************");
    console.log(content);
    console.log("***********************");
});
