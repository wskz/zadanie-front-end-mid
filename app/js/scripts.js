// const mainSection = document.querySelector('.main-section');
// const listViewButton = document.querySelector('.menu__list-button');
// const gridViewButton = document.querySelector('.menu__grid-list-button');
// const productsList = document.querySelector('.products-list');


// const getProducts = () =>{
//     const url = 'products.json';
//     fetch(url)
//     .then(response =>{
//         if(response.status !==200){
//             throw alert("Błąd 404!Sprawdź swoje połączenie internetowe:)")
//         }else{
//             return response.json()
//         }
//     })
//     .then(json => showProducts(json))
//     .catch(err=>console.log(err))
// }
// const showProducts=(products) =>{
//   const resultArea = document.querySelector('.products-list')
//   products.forEach((product)=>{
//       if(product.oldPrice===undefined){
//         const item = document.createElement('div');
//         item.className = 'product';
//         item.innerHTML = `
//         <button class = "product__like-button"><i class="fab fa-gratipay"></i></button>
//         <img class = "product__image src="${product.picture}">
//         <div class = "product__name">${product.name}</div>
//         <div class = "product__size">${product.size}</div>
//         <div class = "price__wrapper">
//         <div class = "product__price">${product.price}</div>
//         </div>        
//         `
//         resultArea.appendChild(item);
//       }else{
//         const item = document.createElement('div');
//         item.className = 'product';
//         item.innerHTML = `
//         <button class = "product__like-button"><i class="fab fa-gratipay"></i></button>
//         <img class = "product__image src="${product.picture}">
//         <div class = "product__name">${product.name}</div>
//         <div class = "product__size">${product.size}</div>
//         <div class = "price__wrapper">
//         <div class = "product__price">${product.price}</div>
//         <div class = "old__price">${product.oldPrice}</div>
//         </div>        
//         `
//         resultArea.appendChild(item);
//       }
//   })
// }

// window.addEventListener('load', getProducts);

// const viewList=()=>{
//     productsList.className='list-view';
// }
// listViewButton.addEventListener('click', viewList);

// const viewGrid=()=>{
//     productsList.className='products-list';
// }
// gridViewButton.addEventListener('click', viewGrid);


const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const firstNameErrorMessage = document.getElementById('first-name-error-message');
const lastNameErrorMessage = document.getElementById('last-name-error-message');
const phoneNumber=document.getElementById('phoneNumber');
const phoneNumberErrorMessage = document.getElementById('phone-error-message')
const email=document.getElementById('email');
const emailErrorMessage=document.getElementById('email-error-message');
const password = document.getElementById('password')
const passwordErrorMessage=document.getElementById('password-error-message');
const submitBtn = document.getElementById('submit');

function submitForm(event){
    if(firstName.value===''||firstName.value.length<3||/[0-9]/.test(firstName.value)||/[^a-zA-Z0-9_]/.test(firstName.value)){
        event.preventDefault()
        firstNameErrorMessage.innerHTML='';
        const paragraph1 = document.createElement("p");
        const node1 = document.createTextNode("Imię powinno zawierać więcej niż 3 litery i nie powinno zawierać cyfr/znaków.");
        paragraph1.appendChild(node1);
        firstNameErrorMessage.appendChild(paragraph1);
        firstName.classList.add('error')

    }else{
        firstNameErrorMessage.innerHTML='';
        firstName.classList.remove('error')
    }
    
    if(lastName.value===''||lastName.value.length<3||/[0-9]/.test(lastName.value)||/[^a-zA-Z0-9_]/.test(lastName.value)){
        event.preventDefault()
        lastNameErrorMessage.innerHTML='';
        const paragraph2 = document.createElement("p");
        const node2 = document.createTextNode("Nazwisko powinno zawierać więcej niż 3 znaki i nie powinno zawierać cyfr/znaków.");
        paragraph2.appendChild(node2);
        lastNameErrorMessage.appendChild(paragraph2);
        lastName.classList.add('error')

     }else{
        lastNameErrorMessage.innerHTML='';
        lastName.classList.remove('error')
     }
     if(phoneNumber.value.length===11 && /[0-9]{3}-[0-9]{3}-[0-9]{3}/.test(phoneNumber.value)){
        phoneNumberErrorMessage.innerHTML='';
        phoneNumber.classList.remove('error')
       
     }else{
        event.preventDefault()
        phoneNumberErrorMessage.innerHTML='';
        const paragraph3 = document.createElement("p");
        const node3 = document.createTextNode("Podaj właściwy numer telefonu.");
        paragraph3.appendChild(node3);
        phoneNumberErrorMessage.appendChild(paragraph3);
        phoneNumber.classList.add('error')
     }
     
    if(email.value.includes('@') && email.value.includes('.') &&email.value.length>5){
        emailErrorMessage.innerHTML='';
        email.classList.remove('error')
    }else{
        event.preventDefault()
        emailErrorMessage.innerHTML='';
        const paragraph4 = document.createElement("p");
        const node4 = document.createTextNode("Wpisz poprawny email.");
        paragraph4.appendChild(node4);
        emailErrorMessage.appendChild(paragraph4);
        email.classList.add('error')
    }
    if(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/.test(password.value)){
        passwordErrorMessage.innerHTML='';
        password.classList.remove('error')
        
    }else{
        event.preventDefault()
        passwordErrorMessage.innerHTML='';
        const paragraph4 = document.createElement("p");
        const node4 = document.createTextNode("Podaj właściwe hasło.");
        paragraph4.appendChild(node4);
        passwordErrorMessage.appendChild(paragraph4);
        password.classList.add('error')
    }

}

submitBtn.addEventListener('click', submitForm)