// Constante pour l'affichage et la récupération des produit dans le local storage
let productStorageBasket = getProductBasket();
console.log(productStorageBasket);

//Récupération des produit dans le local storage pour l'affichage du panier
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
                                                                <td class="photoBasket"><img src="${productBasket.imageUrl}" alt="photo du produit" class="photoProductBasket"</td>
                                                                <td>${productBasket.name}</td>
                                                                <td>${productBasket._id}</td>
                                                                <td>1</td>
                                                                <td>${productBasket.getConvertedPrice()}</td>
                                                            </tr>`
        totalBasket += productBasket.price;
        console.log(totalBasket);
        document.querySelector(".totalPrice").innerHTML = `${getConvertedPrice(totalBasket)}`;
        });
    });
    }  
}

//Affichage du panier
function displayProductBasket(){
    console.log(productStorageBasket);
    if(productStorageBasket.length > 0){
        getDisplayProductBasket();
    }else{
        document.querySelector(".emptyBasket").innerHTML += `<p>Votre panier est vide! Et si vous alliez voir nos produits ? Nos oursons n'attandent plus que vous !</p>`
        document.querySelector("#basket_board").style.display = none;

    }
}

//Fonction executé apres que la page soit chargée
window.addEventListener("load", function() { //attente de la fin de chargement de la page pour appeler les fonctions
displayProductBasket();
});
