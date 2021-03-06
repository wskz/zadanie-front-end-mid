const mainSection = document.querySelector('.main-section');

const getProducts = () =>{
    const url = 'products.json';
    fetch(url)
    .then(response =>{
        if(response.status !==200){
            throw alert("Błąd 404!Sprawdź swoje połączenie internetowe:)")
        }else{
            return response.json()
        }
    })
    .then(json => showProducts(json))
    .catch(err=>console.log(err))
}
const showProducts=(products) =>{
  const resultArea = document.querySelector('.products-list')
  products.forEach((product)=>{
      if(product.oldPrice===undefined){
        const item = document.createElement('div');
        item.className = 'product';
        item.innerHTML = `
        <button class = "product__like-button"><i class="fab fa-gratipay"></i></button>
        <img class = "product__image src="${product.picture}">
        <div class = "product__name">${product.name}</div>
        <div class = "product__size">${product.size}</div>
        <div class = "price__wrapper">
        <div class = "product__price">${product.price}</div>
        </div>        
        `
        resultArea.appendChild(item);
      }else{
        const item = document.createElement('div');
        item.className = 'product';
        item.innerHTML = `
        <button class = "product__like-button"><i class="fab fa-gratipay"></i></button>
        <img class = "product__image src="${product.picture}">
        <div class = "product__name">${product.name}</div>
        <div class = "product__size">${product.size}</div>
        <div class = "price__wrapper">
        <div class = "product__price">${product.price}</div>
        <div class = "old__price">${product.oldPrice}</div>
        </div>        
        `
        resultArea.appendChild(item);
      }
  })
}

window.addEventListener('load', getProducts);