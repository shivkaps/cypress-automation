import 'cypress-file-upload';
import 'cypress-iframe';
import shopPage from '../pageObjects/shop'

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --



// Creating an object for shopPage class so that we can use the method defined in that class
const shopPageObject = new shopPage()

Cypress.Commands.add("addProductToCart", (productName) => { 
    shopPageObject.getTotalGadgets().each(($el, index, $list) => {
        if($el.text().includes(productName)) {
            shopPageObject.getAddToCart().eq(index).click()
        }
     })
 })

 Cypress.Commands.add("loopOverProducts", (itemsNeeded) => { 
    // Looping over array of web elements using each
    const products = cy.get('.products').find('.product')
    products.each(($el, index, $list) => {
        var product = $el.find('.product-name').text().split(" -")
        if (itemsNeeded.findIndex(element => element.includes(product[0])) > -1) {
            $el.find('button').click()
        }
    })  
})

//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
