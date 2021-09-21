fetch("http://localhost:3000/api/teddies").then(data => data.json())
    .then(jsonListProduct => {
        for( let jsonProduct of jsonListProduct){
            let product = new Product(jsonProduct);
            document.querySelector(".listProduct").innerHTML += `<article class="cardProduct">
                                                                    <a href="produit.html" class="linkProduct">
                                                                        <div class="imageProduct">
                                                                            <img class="imgUrl" src="${product.imageUrl}" alt="photo du product">
                                                                        </div>
                                                                        <div class="descriptionProduct">
                                                                            <h3 class="name">${product.name}</h3>
                                                                            <p class="description">${product.description}</p>
                                                                            <p class="price">${product.getConvertedPrice()}</p>
                                                                        </div>
                                                                        <div class="viewProduct">Voir le produit</div>
                                                                    </a>
                                                                </article>`
        }        
})
.catch(function(err) {
    console.log('Erreur : ' +err);
});
