/// <reference types="Cypress" />

describe('Fourth Test Suite', function () {

    it('Handling Tables', function () {


        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        // Finding price of a particular course
        cy.get('#product tr').each(($el, index, $list) => {

            var text = $el.find(':nth-child(2)').text()
            if (text.includes('Appium (Selenium)')) {
                cy.log("The price of the course is:" + $el.find(':nth-child(3)').text())
            }

            //****************** OR *****************************************\\
            if ($el.find(':nth-child(2)').text().includes('Appium (Selenium)')) {
                cy.log("The price of the course is:" + $el.find(':nth-child(3)').text())
            }

            //****************** OR *****************************************\\
            var element = $el.find(':nth-child(2)')
            var text = element.text()
            if (text.includes('Appium (Selenium)')) {
                // As element is already resolved so we were able to apply the text() method
                expect(element.next().text()).to.equal('30')
                cy.log("The price of the course is:" + element.next().text()) // Using next() which moves to the immediate sibling
            }

            //****************** OR *****************************************\\
            var text = $el.find(':nth-child(2)').text()
            if (text.includes('Appium (Selenium)')) {
                // You cannot apply text() directly as it is jquery command and promise won't resolve automatically
                cy.get('#product tr :nth-child(2)').eq(index).next().then(function (price) { 
                    expect(price.text()).to.equal('30')
                    cy.log("The price of the course is:"+ price.text())
                })
        
            }


        })

    })

})