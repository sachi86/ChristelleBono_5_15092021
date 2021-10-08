//Creation of a class for my product objects
class Product{
    constructor(jsonProduct){
        jsonProduct && Object.assign(this, jsonProduct);
    }

    getConvertedPrice(){
        return getConvertedPrice(this.price);
    }

}
