//Création d'une classe pour mes objects produit
class Product{
    constructor(jsonProduct){
        jsonProduct && Object.assign(this, jsonProduct);
    }
    //Methode pour formater le prix
    getConvertedPrice(product){ 
        let newPrice = this.price / 100;
        return new Intl.NumberFormat("fr-FR", {style: "currency", currency: "EUR"}).format(newPrice);
    }
}
