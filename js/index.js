//alert('Welcome! Shop our new arrivals')//

/**  
  * First of all, you want to explain to yourslef the full feature
  * Break down feature with (3 question rule):
        * At what time can I do this event? (DOM content loaded)
        * What's going to trigger this event? (click)
        * effect (display home page)
  **/
/** Globals **/

/** NODE Getters **/
const mainDiv = () => document.getElementById("main");
const homePageLink = () => document.getElementById('home-page-link');
const wishlistLink = () => document.getElementById('wishlist-link');
const cartLink = () => document.getElementById('cart-link');
/** Templates **/
const homePageTemplate = () => {
    return `
            <h1 class="center-align">Welcome! Shop our New Releases</h1>
`
}

const newArrivalsTemplate = () => {
    return `
    <h1>New Arrivals</h1>
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

const renderNewArrivals = () => {
    mainDiv().innerHTML = newArrivalsTemplate();
}

/** Events **/
const homePageLinkEvent = () => {
    homePageLink().addEventListener('click', (e)=> {
        e.preventDefault();
        renderHomePage();
    })
}
/*****************/





/** WHEN THE DOM LOADS **/
document.addEventListener('DOMContentLoaded', () =>{
  // renderHomePage();
  homePageLinkEvent();
})
