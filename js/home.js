fetch("http://localhost:3000/api/teddies")
    .then(data => data.json())
    .then(jsonListProduit => {
        for( let jsonProduit of jsonListProduit){
            let produit = new Produit(jsonProduit);
            document.querySelector(".listProduit").innerHTML += `<article class="cardProduit">
                                                                    <a href="produit.html">
                                                                        <div class="imageProduit">
                                                                            <img id="imgUrl" src="${produit.imageUrl}">
                                                                        </div>
                                                                        <div id="name">${produit.name}</div>
                                                                        <div id="description">${produit.description}</div>
                                                                        <div class="price">${produit.price}</div>
                                                                    </a>
                                                                </article>`
        }
});

