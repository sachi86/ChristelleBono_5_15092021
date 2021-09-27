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