class Product{
    constructor(jsonProduct){
        jsonProduct && Object.assign(this, jsonProduct);
    }
    getConvertedPrice(product){
        let newPrice = this.price / 100;
        return new Intl.NumberFormat("fr-FR", {style: "currency", currency: "EUR"}).format(newPrice);
    }
}