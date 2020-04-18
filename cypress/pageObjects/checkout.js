class checkoutPage {

   checkoutButton() {
        return cy.get('.btn.btn-success')
    }

    country() {
        return cy.get('#country')
    }

    selectcountry() {
        return cy.get('.suggestions a:nth-child(1)')
    }

    termsAndCondition() {
        return cy.get('#checkbox2')
    }

    purchaseButton() {
        return cy.get('input[type="submit"]')
    }

    purchaseMessage() {
        return cy.get('.alert')
    }

}
export default checkoutPage;

