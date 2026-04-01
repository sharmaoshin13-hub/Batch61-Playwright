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