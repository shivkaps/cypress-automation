/// <reference types="Cypress" />

describe('My second test suite', function () {

    before(function () {
        cy.fixture('concept-8').then(function(data) {

            this.var = data


        })

    })

    it("Open the website", function () {

        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        // Check Box and Assertions && Also valid for radio buttons
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value', "option1")
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked')

        // Checking Multiple boxes at once - Method 1
        cy.get('#checkbox-example [type="checkbox"]').check(['option1', 'option2', 'option3']).should('be.checked')
        cy.get('#checkbox-example [type="checkbox"]').uncheck(['option1', 'option2', 'option3']).should('not.be.checked')

        // Checking Multiple boxes at once - Method 2
        cy.get('#checkbox-example [type="checkbox"]').each(($el, index, $list) => {
            $el.click()
            cy.get('#checkbox-example [type="checkbox"]').eq(index).should('be.checked')
        })

        // Selecting Dropdown
        cy.get('select').select('option3').should('have.value', 'option3')

        // Dynamic Dropdowns
        cy.get('#autocomplete').type('ind')
        cy.get('.ui-menu-item').each(($el, index, $list) => {

            if ($el.text() == 'India') {
                $el.click()
            }
        })
        
        cy.get('#autocomplete').should('have.value', 'India')

        // Visible and Non-Visible Elements
        cy.get('#hide-textbox').click()
        cy.get('#displayed-text').should('not.be.visible')
        cy.get('#show-textbox').click()
        cy.get('#displayed-text').should('be.visible')

        cy.log(this.var.name)

    })
  
})