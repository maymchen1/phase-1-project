alert('Welcome! Shop our new arrivals')
/** Globals **/

/** NODE Getters **/
const mainDiv = () => document.getElementById("main");

/** Templates **/
const homePageTemplate = () => {
    return `
    <        <h1 class="center-align">Welcome! Shop our New Releases</h1>
`
}
/** Renderers **/

const renderHomePage = () => {
    mainDiv().innerHTML = homePageTemplate();
}
/*****************/





/** WHEN THE DOM LOADS **/
document.addEventListener('DOMContentLoaded', () =>{
    renderHomePage();
})
