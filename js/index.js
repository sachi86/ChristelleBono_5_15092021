//Récupération de l'url de l'api
const api = "http://localhost:3000/api/teddies";

//Récupération de la liste des produits
fetch(api).then(data => data.json()) //Récupération des données en format json
    .then(jsonListProduct => {
        for( let jsonProduct of jsonListProduct){
            let product = new Product(jsonProduct);
            document.querySelector(".listProduct").innerHTML += `<article class="cardProduct">
                                                                    <a href="produit.html?id=${product._id}" id="linkProduct">
                                                                        <div class="imageProduct">
                                                                            <img class="imgUrl" src="${product.imageUrl}" alt="photo du produit">
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
    alert("Désolé nous n'avons pas pu afficher nos petits ourson Orinoco! Si vous rencontrez un problème contactez nous! Erreur : " +err);
});
