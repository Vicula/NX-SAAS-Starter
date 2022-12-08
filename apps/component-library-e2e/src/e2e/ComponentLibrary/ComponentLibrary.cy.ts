describe('component-library: PageHeader component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=pageheader--primary&args=siteTitle;children;'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to PageHeader!');
    });
});
