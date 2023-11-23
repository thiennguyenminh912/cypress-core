const homepage = {} as IHomepageFunc;


homepage.getMenuItemList = () => {
    return cy.get('.navbar-nav.ml-auto').find('.nav-link').filter(':visible');
}

homepage.getFooterColumn = () => {
    return cy.get('#fotcont .caption', { timeout: 5000 })
}

export default homepage;
