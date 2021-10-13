//Retrieving the query string from the URL
const queryStringUrlId = window.location.search;


//Extract id from url
const urlSearchParams = new URLSearchParams(queryStringUrlId);

//Extract just id from url
const Id = urlSearchParams.get("id");


loadConfig().then(data => {
    config = data;
//display of the product which has been selected by the id with the fetch method
fetch(config.host + `${Id}`)
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
        basketProductCount();
        const btnProduct = document.querySelector("#btnProduct");
        btnProduct.addEventListener("click", function(event){
            event.preventDefault();
            addProductBasket(this.dataset.id);
            document.location.reload();
            basketProductCount();
        });
    })
    .catch(function(err) {
        addDivError();
        return err;
});
});
