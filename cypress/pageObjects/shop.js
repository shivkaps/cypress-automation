class shopPage {

    getTotalGadgets() {
        return cy.get('.card-title')
    }

    getAddToCart() {
        return cy.get('.btn.btn-info')
    }

    clickCheckout() {
        return cy.get('.nav-link.btn.btn-primary')
    }

}
export default shopPage;

