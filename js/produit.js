//Récupération de la chaîne de requête dans l'URL
const queryStringUrlId = window.location.search;
console.log(queryStringUrlId);

//Extraire l'id de l'URL
const urlSearchParams = new URLSearchParams(queryStringUrlId);
console.log(urlSearchParams);

const Id = urlSearchParams.get("id");
console.log(Id);

//affichage du produit qui à été selectionné par l'id avec la méthode fetch
fetch(`http://localhost:3000/api/teddies/${Id}`)
    .then(response => response.json())
    .then(dataProduct => {
        let product = new Product(dataProduct); 
        document.querySelector(".productCart").innerHTML += `<article class="productCardId">
                                    <div class="imageProductId">
                                        <img class="imgUrlId" src="${product.imageUrl}" alt="photo du produit">
                                    </div>
                                    <div class="descriptionProductId">
                                        <h3 class="nameId">${product.name}</h3>
                                        <form class="productFormId">
                                            <label for="colors" class="colorsId">Couleur :</label>
                                            <select name="colors" id="colors">
                                                <option value="colors">${product.colors[0]}</option>
                                                <option value="colors">${product.colors[1]}</option>
                                                <option value="colors">${product.colors[2]}</option>
                                                <option value="colors">${product.colors[3]}</option>
                                            </select>
                                        </form>
                                        <p class="descriptionId">${product.description}</p>
                                        <p class="priceId">${product.getConvertedPrice()}</p>
                                        <button type="submit" class="btnProduct">Ajouter au panier</button>
                                    </div>
                                </article>`
    })
        .catch(function(err) {
            alert("Désolé nous n'avons pas pu afficher le petit ourson Orinoco que vous voulez-voir! Si vous rencontrez un problème contactez nous! Erreur : " +err);
});