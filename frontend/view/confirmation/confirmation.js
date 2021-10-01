window.addEventListener("load", function() { 
        let orderBasket = JSON.parse(localStorage.order);
        let orderBasketId = orderBasket.orderId;
        let orderBasketProducts = orderBasket.products;
        let totalBasket = 0;

        for(i in orderBasketProducts){
            totalBasket += orderBasketProducts[i].price;
            console.log(totalBasket);
        }
        document.querySelector("#IdOrder").innerHTML += `${orderBasketId}`;
        document.querySelector("#PriceOrder").innerHTML += `${getConvertedPrice(totalBasket)}`;
        localStorage.clear();
        products = [];
    });