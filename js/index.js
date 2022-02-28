/**  
  * First of all, you want to explain to yourself the full feature
  * Break down feature with (3 question rule):
        * At what time can I do this event? (DOM content loaded)
        * What's going to trigger this event? (click)
        * effect (display home page)
  **/

/** Globals **/
const baseUrl = 'http://localhost:3000'
let inventory = [];
/** NODE Getters **/
const mainDiv = () => document.getElementById("main");
const homePageLink = () => document.getElementById('home-page-link');
const wishlistLink = () => document.getElementById('wishlist-link');
const sellLink = () => document.getElementById('sell-link');
const listingsLink = () => document.getElementById('listings-link');
const itemInput = () => document.getElementById('item');
const sizeInput = () => document.getElementById('size');
const priceInput = () => document.getElementById('price');
/** Templates **/
const homePageTemplate = () => {
    return `
            <h1 class="center-align">Welcome! Shop and sell at one place! </h1>
`
}
const inventoryTemplate = (inventory) => {
  const tr = document.createElement('tr');
  const tdItem = document.createElement('td');
  const tdSize = document.createElement('td');
  const tdPrice = document.createElement('td');
  tdItem.innerText = inventory.item;
  tdSize.innerText = inventory.size;
  tdPrice.innerText = inventory.price;
  tr.appendChild(tdItem)
  tr.appendChild(tdSize)
  tr.appendChild(tdPrice)
  return tr;
}
 const wishlistTemplate = () => {
     return `
     <h1>Your Wishlist</h1>
     <table class="highlight">
        <thead>
          <tr>
              <th>Item Name</th>
              <th>Item Size</th>
              <th>Item Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Dress</td>
            <td>XS</td>
            <td>$50.00</td>
          </tr>
          <tr>
            <td>Jeans</td>
            <td>2</td>
            <td>$30.00</td>
          </tr>
          <tr>
            <td>Shirt</td>
            <td>L</td>
            <td>$15.00</td>
          </tr>
        </tbody>
      </table>  `
 }
 /** Renderers **/

const renderHomePage = () => {
    mainDiv().innerHTML = homePageTemplate();
}

const renderWishlist = () => {
     mainDiv().innerHTML = wishlistTemplate();
 }
 const renderListings = async () => {
   await loadInventory();
   mainDiv().innerHTML = '';
   const h1 = document.createElement('h1');
   const table = document.createElement('table');
   const thead = document.createElement('thead');
   const tr = document.createElement('tr');
   const thItem = document.createElement('th');
   const thSize = document.createElement('th');
   const thPrice = document.createElement('th');
   h1.innerText = 'Listings'
   thItem.innerText = 'Item';
   thSize.innerText = 'Size';
   thPrice.innerText = 'Price';
   table.classList.add('highlight');
   tr.appendChild(thItem);
   tr.appendChild(thSize);
   tr.appendChild(thPrice);
   thead.appendChild(tr);
   table.appendChild(thead);
   inventory.forEach(inventory => tbody.appendChild(inventoryTemplate(inventory)))
   table.appendChild(tbody);
   mainDiv().appendChild(h1);
   mainDiv().appendChild(table);
 }

const renderSell = () => {
  const h1 = document.createElement('h1');
  const form = document.createElement('form');

  const itemDiv = document.createElement('div');
  const itemInput = document.createElement ('input');
  const itemLabel = document.createElement ('label');
  
  const sizeDiv = document.createElement('div');
  const sizeInput = document.createElement ('input');
  const sizeLabel = document.createElement ('label');

  const priceDiv = document.createElement('div');
  const priceInput = document.createElement ('input');
  const priceLabel = document.createElement ('label');
  const submitButton = document.createElement('input');


  h1.className = 'left-align';
  itemDiv.className ='input-field';
  sizeDiv.className ='input-field';
  priceDiv.className ='input-field';
  submitButton.className = 'waves-effect waves-light btn';


  itemInput.setAttribute ('id', 'date');
  itemInput.setAttribute ('type', 'text');
  itemInput.setAttribute ('for', 'date');

  sizeInput.setAttribute ('id', 'date');
  sizeInput.setAttribute ('type', 'text');
  sizeInput.setAttribute ('for', 'date');

  priceInput.setAttribute ('id', 'date');
  priceInput.setAttribute ('type', 'text');
  priceInput.setAttribute ('for', 'date');

  h1.innerText = 'Sell';
  itemLabel.innerText ='Item';
  sizeLabel.innerText = 'Size';
  priceLabel.innerText = 'Price';
  submitButton.setAttribute('type', 'submit');
  submitButton.setAttribute('value', 'Sell');

  mainDiv().innerHTML = "";

  itemDiv.appendChild(itemInput);
  itemDiv.appendChild(itemLabel);
  sizeDiv.appendChild(sizeInput);
  sizeDiv.appendChild(sizeLabel);
  priceDiv.appendChild(priceInput);
  priceDiv.appendChild(priceLabel);

  form.appendChild(itemDiv);
  form.appendChild(sizeDiv);
  form.appendChild(priceDiv);
  form.appendChild(submitButton);

  form.addEventListener('submit', submitFormEvent);

  mainDiv().appendChild(h1);
  mainDiv().appendChild(form);
}
const renderListings = () => {
  mainDiv().innerHTML = listingsTemplate();
}
/** Events **/
const loadInventory = () => {
     fetch(baseUrl + '/inventory')
     .then(resp => resp.json())
     .then(data => inventory = data)
 }
// const loadInventory = async () => {
//   const resp = await fetch(baseUrl + '/inventory')
//   const data = await resp.json();
//   inventory = data;
// }

const homePageLinkEvent = () => {
    homePageLink().addEventListener('click', (e)=> {
        e.preventDefault();
        renderHomePage();
    })
}
const wishlistEvent = () => {
    wishlistLink().addEventListener('click', (e)=> {
        e.preventDefault();
        renderWishlist();
    })
}
const sellEvent = () => {
    sellLink().addEventListener('click', (e)=> {
        e.preventDefault();
        renderSell();
    })
}
const listingsEvent = () => {
    listingsLink().addEventListener('click', (e)=> {
        e.preventDefault();
        renderListings();
    })
}
const submitFormEvent = e => {
  e.preventDefault();
  // const [item, size, price] = e;
  console.log('item', itemInput().value)
  console.log('size', sizeInput().value)
  console.log('price', priceInput().value)
  fetch('http://localhost:3000/inventory', {
    method: "POST",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      item: itemInput().value,
      size: sizeInput().value,
      price: priceInput().value,
    })
  })
  .then(resp => resp.json())
  .then(inventory => {
    renderSellPage();
  })
}

/*****************/





/** WHEN THE DOM LOADS **/
document.addEventListener('DOMContentLoaded', () => {
  renderHomePage();
  homePageLinkEvent();
  wishlistEvent();
  sellEvent();
  listingsEvent();
})
