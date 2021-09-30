//Variables des différents regex pour validation input
var regexText =  new RegExp(/^[\w\s'\-àáâãäæçèéêëìíîïñòóôõöùúûüýÿœÀÁÂÃÄÆÇÈÉÊËÌÍÎÏÑÒÓÔÕÖÙÚÛÜÜŒ]+$/g); // RegExp(/^[\w\s-']+$/g)  àáâãäæçèéêëìíîïñòóôõöùúûüýÿœÀÁÂÃÄÆÇÈÉÊËÌÍÎÏÑÒÓÔÕÖÙÚÛÜÜŒ
var regexOnlyText = new RegExp(/^[a-zA-Z\s'\-àáâãäæçèéêëìíîïñòóôõöùúûüýÿœÀÁÂÃÄÆÇÈÉÊËÌÍÎÏÑÒÓÔÕÖÙÚÛÜÜŒ]+$/g);
var regexEmail = new RegExp(/^[\w\-\.]+@[a-zA-Z0-9\-]+\.[a-zA-Z]{2,6}$/g); // /^.+@.+\..+$/g
var regexZip = new RegExp(/^\d{5}$/g);

//Variable objet contact pour l'envoi formulaire
var contact = {
    firstName: null,
    lastName: null,
    address: null,
    city: null,
    email: null,
    zip: null
}

//Variables pour simplifié la manupulation des ids input
const idFirstname = "firstName";
const idLastname = "lastName";
const idEmail = "email";
const idAddress = "address";
const idCity = "city";
const idZip = "zip";

//Fonction de vérification de la valididé des input
function ValidInputForm(idInput, regex){ 
    let input = document.getElementById(idInput);
    let valueInput = input.value;
    
    if(valueInput.match(regex)){
        input.style.background = "#d2e9d8";
        input.style.border = "#d2e9d8";
        input.style.boxShadow = "5px 5px 10px #d2e9d8"  
        contact[idInput] = valueInput;
        return true;      
    }
    else{
        input.style.background = "#f5cfd3";
        input.style.border = "#f5cfd3";
        input.style.boxShadow = "5px 5px 10px #f5cfd3"  
        return false;
    }
}

//Fonction d'envoi du formulaire
function sendForm(){ 
    fetch(api + "/order", {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({contact: contact, products : productStorageBasket})
    })
    .then(function(response){
        if(response.ok){
            return response.json();
        }
    })
    .then(function(ServerValue){
        let validOrderBasket = JSON.stringify(ServerValue);
        localStorage.setItem("order", validOrderBasket); //Stocke la réponse du serveur dans le localstorage
        document.querySelector(".formDelivery").submit(); //Soumet le formulaire
    })
    .catch(function(err) {
        alert("Désolé nous n'avons pas pu envoyer la confirmation de commande! Si vous rencontrez un problème contactez nous! Erreur : " +err);
    });
}

// Fonction d'écoute des évènements (input) sur le formulaire
function listenerForm() 
{   
    document.getElementById(idFirstname).addEventListener("blur", ()=>{
        ValidInputForm(idFirstname, regexOnlyText); //Appel de la fonction de vérification de l'input
    })
    document.getElementById(idLastname).addEventListener("blur", ()=>{
        ValidInputForm(idLastname, regexOnlyText);
    })
    document.getElementById(idEmail).addEventListener("blur", ()=>{
        ValidInputForm(idEmail, regexEmail);
    });
    document.getElementById(idAddress).addEventListener("blur", ()=>{
        ValidInputForm(idAddress, regexText);
    });
    document.getElementById(idCity).addEventListener("blur", ()=>{
        ValidInputForm(idCity, regexOnlyText);
    });
    document.getElementById(idZip).addEventListener("blur", ()=>{
        ValidInputForm(idZip, regexZip);
    });
    
    document.querySelector(".formDelivery").addEventListener("click", (evenement)=> {
        evenement.preventDefault(); // Annule le comportement par défaut du bouton formulaire
        if(ValidInputForm(idFirstname, regexOnlyText) &&
        ValidInputForm(idLastname, regexOnlyText) &&
        ValidInputForm(idEmail, regexEmail) &&
        ValidInputForm(idAddress, regexText) &&
        ValidInputForm(idCity, regexOnlyText) &&
        ValidInputForm(idZip, regexZip)){ 
            sendForm(); //Appel de la fonction d'envoie
        }
    });    
}

listenerForm();