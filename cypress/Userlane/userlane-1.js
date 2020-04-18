/// <reference types="Cypress" />

var url

describe('Userlane Website', function () {

    it("Checking for QA position", function () {

        cy.visit("https://www.userlane.com/team")

        cy.wait(2000)

        cy.get('.bzOpening').each(($el, index, $list) => {

            if ($el.find('a').text().includes('QA')) {
                cy.log($el.find('a').text())

                cy.get('.bzOpening a').eq(index).invoke('attr', 'onclick').then(($junkUrl) => {
                    const junkUrl = $junkUrl
                    url = junkUrl.split("bzPopupCenter('").join('?source').split('?source')
                    cy.log(url[1])
                    Cypress.env('url2', url[1])
                    cy.writeFile('cypress/data.txt', url[1])
                    cy.writeFile('data1.txt', url[1])
                })
            }
        })
    })

})
