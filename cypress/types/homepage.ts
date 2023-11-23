interface IHomepageFunc {
    getMenuItemList: () => Cypress.Chainable<JQuery<HTMLElement>>;
    getFooterColumn: () => Cypress.Chainable<JQuery<HTMLElement>>;
}
