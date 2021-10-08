// Function to add to cart
function addProductBasket(productId){
    let listProductBasket = getProductBasket();
    listProductBasket.push(productId);
    saveProductBasket(listProductBasket);
}

//Retrieve the products for the basket
function getProductBasket(){
    let listProductBasket = localStorage.getItem("ProductBasket");
    console.log(listProductBasket);
    if (listProductBasket == null){
        return [];
    }else{
        return JSON.parse(listProductBasket);
    }
}

// Save the products for the basket
function saveProductBasket(listProductBasket){
    localStorage.setItem("ProductBasket", JSON.stringify(listProductBasket));
}
