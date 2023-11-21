const homepage = {} as IHomepageFunc;


homepage.getMenuItemList = () => {
    return cy.get('.navbar-nav.ml-auto').find('.nav-link').filter(':visible');
}

export default homepage;
