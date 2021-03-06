//Variables from different regexes for input validation
const regexText =  new RegExp(/^[\w\s'\-àáâãäæçèéêëìíîïñòóôõöùúûüýÿœÀÁÂÃÄÆÇÈÉÊËÌÍÎÏÑÒÓÔÕÖÙÚÛÜÜŒ]+$/g); // RegExp(/^[\w\s-']+$/g)  àáâãäæçèéêëìíîïñòóôõöùúûüýÿœÀÁÂÃÄÆÇÈÉÊËÌÍÎÏÑÒÓÔÕÖÙÚÛÜÜŒ
const regexOnlyText = new RegExp(/^[a-zA-Z\s'\-àáâãäæçèéêëìíîïñòóôõöùúûüýÿœÀÁÂÃÄÆÇÈÉÊËÌÍÎÏÑÒÓÔÕÖÙÚÛÜÜŒ]+$/g);
const regexEmail = new RegExp(/^[\w\-\.]+@[a-zA-Z0-9\-]+\.[a-zA-Z]{2,6}$/g); // /^.+@.+\..+$/g
const regexZip = new RegExp(/^\d{5}$/g);

//convertion of price display
function getConvertedPrice(oldPrice){ 
    let price = oldPrice /100;
    return Intl.NumberFormat('fr-FR', {style: 'currency', currency: 'EUR'}).format(price);
}

//function to create div for display error message
function addDivError(){
    let divError = document.createElement('div');
    divError.className = "errorMessage";
    document.querySelector(".errorMessage").innerHTML += `<span style='font-size:100px;'>&#10071;
                                                        </span><p>Nous n'avons pas pu afficher les éléments de cette page, si le problème persite, veuillez nous contactez.</p>
                                                        <span style='font-size:100px;'>&#10071;</span>`
}

//function to display Error message input
function displayMessage(inputElement, message) {
    let errorElement = inputElement.nextElementSibling;
    errorElement.classList.add('active');
    errorElement.textContent = message;
}
 
//function to remove Error message input
function removeMessage(inputElement) {
    let errorElement = inputElement.nextElementSibling;
    errorElement.classList.remove('active');
    errorElement.textContent = '';
}
    
