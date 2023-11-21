const homepage = {} as IHomepageFunc;


homepage.getMenuItemList = () => {
    return cy.get('.nav-item');
}

export default homepage;
