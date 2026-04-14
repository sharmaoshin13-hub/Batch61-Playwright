async function OrderfromZomato(coffee) {
    try{
        await placeOrder(coffee);
        await resturantForwardToStarbucks(coffee);
        await resturantAccept(coffee);
        await resturantPrepare(coffee);
        await orderDeliveryBlinkit(coffee);
    }catch(error){
        console.log("There is some issue in data")
    }
}
OrderfromZomato(coffee);



//await- it will wait until this promise is not settle
//await only works inside async function which is returning promise
//try catch- it will handle the error if there is any error in promise
//if I am not using try catch then I will not get the error and my code will be failed without any reason.
//if I am using await, asyn is mandatory otherwise it will give error. If I am not using await then it will not wait for the promise to settle and it will move to the next line of code and it will give wrong output.
// we cannot use await without functions.