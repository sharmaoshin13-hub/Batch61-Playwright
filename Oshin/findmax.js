let arr = [-3,-5,-8,-11,-13]
//max value
let x = Number.MAX_SAFE_INTEGER
for(let i = 0; i < arr.length ;i++){
    if(arr[i] < x){
        x = arr[i];
    }
}
console.log(x);