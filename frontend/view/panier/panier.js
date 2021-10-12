
//Retrieving the products from the local storage for the display of the basket
function getDisplayProductBasket(){
    let totalBasket = 0;
    for(let key of productStorageBasket){
        console.log(key);
        loadConfig().then(data => {
            config = data;
        fetch(config.host + key).then(response => response.json())
        .then(dataProductBasket =>{
            let productBasket = new Product(dataProductBasket);
            
            document.querySelector("#basket").innerHTML += `<tr>
                                                                <td scope="row" class="photoBasket"><img src="${productBasket.imageUrl}" alt="photo du produit" class="photoProductBasket"</td>
                                                                <td>${productBasket.name}</td>
                                                                <td>${productBasket._id}</td>
                                                                <td>1</td>
                                                                <td>${productBasket.getConvertedPrice()}</td>
                                                            </tr>
                                                            <button type="submit" id="btnRowClear" data-id="${productBasket._id}">Supprimer</button>`
        totalBasket += productBasket.price;
        console.log(totalBasket);
        document.querySelector(".totalPrice").innerHTML = `${getConvertedPrice(totalBasket)}`;
        document.querySelector(".totalQuantity").innerHTML = `${ProductLength()}`;
        basketProductCount();
        });
    });
    }  
}

//Shopping cart display
function displayProductBasket(){
    console.log(productStorageBasket);
    if(productStorageBasket.length > 0){
        getDisplayProductBasket();
    }else{
        document.querySelector(".emptyBasket").innerHTML += `<p>Votre panier est vide! Et si vous alliez voir nos produits ? Nos oursons n'attandent plus que vous !</p>`
        document.querySelector(".emptyBasket").style.background = "#ecd6ea";
        document.querySelector("#basket_board").style.display = "none";
        document.querySelector(".basket_form").style.display = "none";
    }
}

//function to clear basket
function clearBasket(){
    localStorage.clear();
    basketProductCount();
    document.location.reload();
}

//function clear to row
function RowProductClear(key){
    let btnRowClear = document.getElementById("btnRowClear");
    console.log(btnRowClear);
    btnRowClear.addEventListener("click",function(RowClearEvent){
        RowClearEvent.preventDefault();
        productStorageBasket.splice(key,1); 
    })
}

//function executed after the page is loaded
window.addEventListener("load", function() { 
displayProductBasket();
RowProductClear();
});