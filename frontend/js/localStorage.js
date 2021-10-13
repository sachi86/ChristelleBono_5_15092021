let productStorageBasket = getProductBasket();
// Function to add to cart
function addProductBasket(productId){
    let listProductBasket = getProductBasket();
    listProductBasket.push(productId);
    saveProductBasket(listProductBasket);
}


//Retrieve the products for the basket
function getProductBasket(){
    let listProductBasket = localStorage.getItem("ProductBasket");
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

// function which returns the number of elements in the localStorage
function ProductLength(){ 
    return(productStorageBasket.length);
}

// function for displaying the counter of the number of items present in the localStorage (basket)
function basketProductCount(){ 
    let quantity = ProductLength();
    let displayCount = document.querySelector("#quantityBasket");
    if(quantity == 0){
        displayCount.innerHTML = "";
    }
    else{
        displayCount.innerHTML = `${quantity}`;
        displayCount.style.display = "flex";
    }
}