//Création d'une classe pour mes objects produit
class Product{
    constructor(jsonProduct){
        jsonProduct && Object.assign(this, jsonProduct);
    }

    getConvertedPrice(){
        return getConvertedPrice(this.price);
    }

}
