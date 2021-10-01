//Variables des différents regex pour validation input
const regexText =  new RegExp(/^[\w\s'\-àáâãäæçèéêëìíîïñòóôõöùúûüýÿœÀÁÂÃÄÆÇÈÉÊËÌÍÎÏÑÒÓÔÕÖÙÚÛÜÜŒ]+$/g); // RegExp(/^[\w\s-']+$/g)  àáâãäæçèéêëìíîïñòóôõöùúûüýÿœÀÁÂÃÄÆÇÈÉÊËÌÍÎÏÑÒÓÔÕÖÙÚÛÜÜŒ
const regexOnlyText = new RegExp(/^[a-zA-Z\s'\-àáâãäæçèéêëìíîïñòóôõöùúûüýÿœÀÁÂÃÄÆÇÈÉÊËÌÍÎÏÑÒÓÔÕÖÙÚÛÜÜŒ]+$/g);
const regexEmail = new RegExp(/^[\w\-\.]+@[a-zA-Z0-9\-]+\.[a-zA-Z]{2,6}$/g); // /^.+@.+\..+$/g
const regexZip = new RegExp(/^\d{5}$/g);

// convertion de l'affichage du prix
function getConvertedPrice(oldPrice){ 
    let price = oldPrice /100;
    return Intl.NumberFormat('fr-FR', {style: 'currency', currency: 'EUR'}).format(price);
}

//fonction pour crée un div pour le message d'erreur d'affichage
function addDivError(){
    let divError = document.createElement('div');
    div.className = "errorMessage";
    document.querySelector(".errorMessage").innerHTML `<span style='font-size:100px;'>&#10071;
                                                        </span><p>Nous n'avons pas pu afficher les éléments de cette page, si le problème persite, veuillez nous contactez.</p>
                                                        <span style='font-size:100px;'>&#10071;</span>`
}