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
        document.querySelector(".productSection").innerHTML += ` <article class="productCardId">
                                                                        <div class="imageProductId">
                                                                            <img class="imgUrlId" src="${product.imageUrl}" alt="photo du produit">
                                                                        </div>
                                                                        <div class="descriptionProductId">
                                                                            <h3 class="nameId"><span>Nom du Produit : </span>${product.name}</h3>
                                                                            <form class="productFormId">
                                                                                <div class="productOption">
                                                                                    <label for="colors" class="colorsId">Choix de couleur :</label>
                                                                                    <select name="colors" id="colors" required>
                                                                                    <option selected>Choississez votre couleur</option>
                                                                                    ${product.colors.map(color => `<option>${color}</option>`)}
                                                                                    </select>
                                                                                </div>
                                                                            </form>
                                                                            <p class="descriptionId">Description du produit :<br/> ${product.description}</p>
                                                                            <p class="priceId">Prix : ${product.getConvertedPrice()}</p>
                                                                            <button type="submit" class="btn" id="btnProduct" data-id="${product._id}">Ajouter au panier</button>
                                                                        </div>
                                                                </article>`;
        const btnProduct = document.querySelector("#btnProduct");
        btnProduct.addEventListener("click", function(event){
            event.preventDefault();
            addProductBasket(this.dataset.id);
        });
    })
    .catch(function(err) {
            alert("Désolé nous n'avons pas pu afficher le petit ourson Orinoco que vous voulez-voir! Si vous rencontrez un problème contactez nous! Erreur : " +err); 
});