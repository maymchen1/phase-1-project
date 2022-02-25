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
const searchLink = () => document.getElementById('search-link');
/** Templates **/
const homePageTemplate = () => {
    return `
            <h1 class="center-align">Welcome! Shop our New Releases</h1>
`
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
const searchTemplate = () => {
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

    h1.className = 'center-align';
    itemDiv.className ='input-field';
    sizeDiv.className ='input-field';
    priceDiv.className ='input-field';

    itemInput.setAttribute ('id', 'date');
    itemInput.setAttribute ('type', 'text');
    itemInput.setAttribute ('for', 'date');

    sizeInput.setAttribute ('id', 'date');
    sizeInput.setAttribute ('type', 'text');
    sizeInput.setAttribute ('for', 'date');

    priceInput.setAttribute ('id', 'date');
    priceInput.setAttribute ('type', 'text');
    priceInput.setAttribute ('for', 'date');

    h1.innerText = 'Search';
    itemLabel.innerText ='Item';
    sizeLabel.innerText = 'Size';
    priceLabel.innerText = 'Price';

    itemDiv.appendChild(itemInput);
    itemDiv.appendChild(itemLabel);
    sizeDiv.appendChild(sizeInput);
    sizeDiv.appendChild(sizeLabel);
    priceDiv.appendChild(priceInput);
    priceDiv.appendChild(priceLabel);

    form.appendChild(itemDiv);
    form.appendChild(sizeDiv);
    form.appendChild(priceDiv);
  
    mainDiv().appendChild(h1);
    mainDiv().appendChild(form);
  }

 /** Renderers **/

const renderHomePage = () => {
    mainDiv().innerHTML = homePageTemplate();
}

const renderWishlist = () => {
    mainDiv().innerHTML = wishlistTemplate();
}

const renderSearch = () => {
    mainDiv().innerHTML = searchTemplate();
}
/** Events **/
const loadInventory = () => {
    fetch(baseUrl + '/inventory')
    .then(resp => resp.json())
    .then(data => inventory = data)
}

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
const searchEvent = () => {
    searchLink().addEventListener('click', (e)=> {
        e.preventDefault();
        renderSearch();
    })
}

/*****************/





/** WHEN THE DOM LOADS **/
document.addEventListener('DOMContentLoaded', () =>{
  // renderHomePage();
  homePageLinkEvent();
  wishlistEvent();
  searchEvent();
})
