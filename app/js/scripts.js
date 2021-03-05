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
      const item = document.createElement('div');
      item.className = 'product';
      item.innerHTML = `
      <img class = "product__image src="${product.picture}">
      <div class = "product__name">${product.name}</div>
      <div class = "product__size">${product.size}</div>
      <div class = "product__price">${product.price}</div>
      `
      resultArea.appendChild(item);
  })
}

window.addEventListener('load', getProducts);