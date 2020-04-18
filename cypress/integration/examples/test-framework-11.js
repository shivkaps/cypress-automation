// Command to run just the framework
//./node_modules/.bin/cypress run --env configFile=prod --spec cypress/integration/examples/test-framework-11.js
/// <reference types="Cypress" />

import homePage from '../../pageObjects/home'
import shopPage from '../../pageObjects/shop'
import checkoutPage from '../../pageObjects/checkout'

describe('Cypress Test Framework', function () {

    before(function () {
        cy.fixture('concept-8').then(function (data) {
            this.var = data
        })
    })

    // Test Framework using pageObjects framework, Fixtures, reusable methods in command.js
    it('e2e-test-automation-framework', function () {

        // Creating an object for homePage and shopPage class so that we can use the methods defined in that class
        const homePageObject = new homePage()
        const shopPageObject = new shopPage()
        const checkoutPageObject = new checkoutPage()


        // Passing the values from config/*.json
        //--env configFile=prod
        // Check the code in plugins/index.js  // This will overwrite env in cypress.json
        // This will also overwrite any CLI --env // Preference will always be prod.json
        cy.visit(Cypress.env('url'))

        homePageObject.getnameBox().type('Hello')
        homePageObject.getGenderSelect().select('Female')
        homePageObject.getShopButton().click()

        // Looping over array of products defined in fixtures
        this.var.productNameList.forEach(function (element) {
            // Using addProductToCart method from command.js (Webelements in this method are being fetched from pageObjects)
            cy.addProductToCart(element)
        })

        shopPageObject.clickCheckout().click()

        var totalProductPrice = 0
        var totalPrice = 0


        // Getting sum of prices for each product in the checkout page
        cy.get('tr td:nth-child(4) strong').each(($el, index, $list) => {
            var productPrice = $el.text().split(' ')
            var priceInt = parseInt(productPrice[1].trim())  //parseInt or Number both can be used. See line 54
            this.random = 0
            totalProductPrice += priceInt
        })

        // Getting total price
        cy.get('.text-right strong').then((junkTotal) => {
            var total = junkTotal.text().split(' ')
            totalPrice = Number(total[1].trim())
        }).then(function () {
            assert.equal(totalProductPrice, totalPrice) //https://devhints.io/chai
            // OR
            expect(totalProductPrice).to.equal(totalPrice)
        })

        checkoutPageObject.checkoutButton().click()
        checkoutPageObject.country().type('India')
        checkoutPageObject.selectcountry().click()
        checkoutPageObject.termsAndCondition().click({ force: true })
        checkoutPageObject.purchaseButton().click()
        checkoutPageObject.purchaseMessage().should('include.text', 'Success! Thank you! Your order will be delivered in next few weeks :-).')


    })

})