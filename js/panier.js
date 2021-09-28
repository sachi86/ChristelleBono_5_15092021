// Fonction pour ajouter au panier
function addProductBasket(productId){
    let listProductBasket = getProductBasket();
    listProductBasket.push(productId);
    saveProductBasket(listProductBasket);
}

//Récupérer les produits pour le panier
function getProductBasket(){
    let listProductBasket = localStorage.getItem("ProductBasket");
    if (listProductBasket == null){
        return [];
    }else{
        return JSON.parse(listProductBasket);
    }
}

//Sauvegarder les produits pour le panier
function saveProductBasket(listProductBasket){
    localStorage.setItem("ProductBasket", JSON.stringify(listProductBasket));
}

// Constante pour l'affichage et la récupération des produit dans le local storage
const productStorageBasket = getProductBasket();
const api = "http://localhost:3000/api/teddies/";

//Récupération des produit dans le local storage pour l'affichage du panier
function getViewProductBasket(){
    for(let key of productStorageBasket){
        console.log(key);
        fetch(api + key).then(response => response.json())
        .then(dataProductBasket =>{
            let productBasket = new Product(dataProductBasket);
            let totalBasket =0;
            document.querySelector("#basket").innerHTML += `<tr>
                                                                <td class="photoBasket"><img src="${productBasket.imageUrl}" alt="photo du produit" class="photoProductBasket"</td>
                                                                <td>${productBasket.name}</td>
                                                                <td>${productBasket._id}</td>
                                                                <td>1</td>
                                                                <td>${productBasket.getConvertedPrice()}</td>
                                                            </tr>`
        totalBasket += productBasket.getConvertedPrice();
        console.log(totalBasket);
        document.querySelector(".totalPrice").innerHTML += `${totalBasket}`
        })
    }
};

//Affichage du panier
function wieuProductBasket(){
    console.log(productStorageBasket);
    if(productStorageBasket.length > 0){
        getViewProductBasket();
    }else{
        document.querySelector("#basket").innerHTML += `<p>Votre panier est vide! Et si vous alliez voir nos produits ? Nos oursons n'attandent plus que vous !</p>`
    }
}
//Affichage du prix total du panier
//fonction executé apres que la page soit chargée
window.addEventListener("load", function() { //attente de la fin de chargement de la page pour appeler les fonctions
wieuProductBasket();
});
