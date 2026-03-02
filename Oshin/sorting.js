let  arr = [10,34,5,80,2];
//sort array
//nested for loop
//swapping 
//value comparison

for(let i = 0; i < arr.length; i++){
    for(let j = 0; j < arr.length ; j++){
        if (arr[i] > arr[j]){
            
            //swapping alogorithm
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
}

console.log(arr);