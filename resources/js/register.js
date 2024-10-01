
const formElement = document.querySelector('form');
const nameElement = document.getElementById('name');
const nameErrorElement = document.getElementById('name-error');
const emailElement = document.getElementById('email');
const emailErrorElement = document.getElementById('email-error');
const addressElement = document.getElementById('address');
const addresseErrorElement = document.getElementById('address-error');
const postalCodeElement = document.getElementById('postalCode');
const postalCodeErrorElement = document.getElementById('postalCode-error');


const pNameElement = document.getElementById('pName');
const pEmailElement = document.getElementById('pEmail');
const pAddressElement = document.getElementById('pAddress');
const pPostalCodeElement = document.getElementById('pPostalCode');



formElement.addEventListener('submit', (e) => {
  e.preventDefault(); // prevent form from submitting
  checkInputs();
});

function checkInputs() {
  const nameValue = nameElement.value.trim();
  const emailValue = emailElement.value.trim();
  const addressValue = addressElement.value.trim();
  const postalCodeValue = postalCodeElement.value.trim();


  if(nameValue === '') {
    setErrorFor(nameErrorElement, 'Name cannot be blank');
  } else {
    setSuccessFor(nameErrorElement);
  }

  if(emailValue === '') {
    setErrorFor(emailErrorElement, 'Email cannot be blank');
  } else if(!isEmail(emailValue)) {
    setErrorFor(emailErrorElement, 'Not a valid email');
  } else {
    setSuccessFor(emailErrorElement);
  }
  if(addressValue === '') {
    setErrorFor(addresseErrorElement, 'Address cannot be blank');
  } else {
    setSuccessFor(addresseErrorElement);
  }
  if(postalCodeValue === '') {
    setErrorFor(postalCodeErrorElement, 'Postal Code cannot be blank');
  } else {
    setSuccessFor(postalCodeErrorElement);
  }

 
}
// Function for form validation and input data
function setErrorFor(input, message) {
  input.innerText = message;
  formElement.className = 'form-element error';
}

function setSuccessFor(input) {
  
  input.innerText = '';
  formElement.className = 'form-element success';
}

function isEmail(email) {
  return /^\w+[\+\.\w-]*@([\w-]+\.)*\w+[\w-]*\.([a-z]{2,4}|\d+)$/i.test(email);
}

function isSubmit()
{
 if(confirm("Submit Form, Are you Agree?") != true) {
     return false;
 } else {
     return true;
 }

}
function isReset()
{
 if(confirm("Reset Form, Are you Agree?") != true) {
     return false;
 } else {
     return true;
 }
}

function hideAllParagraph(){
    pNameElement.hidden = true;
    pEmailElement.hidden = true;
    pAddressElement.hidden = true;
    pPostalCodeElement.hidden = true;
}

nameElement.addEventListener('focus', (e) => {
    hideAllParagraph();
    pNameElement.hidden = false;
});

emailElement.addEventListener('focus', (e) => {
    hideAllParagraph();
    pEmailElement.hidden = false;
});
addressElement.addEventListener('focus', (e) => {
    hideAllParagraph();
    pAddressElement.hidden = false;
});

postalCodeElement.addEventListener('focus', (e) => {
    hideAllParagraph();
    pPostalCodeElement.hidden = false;
});