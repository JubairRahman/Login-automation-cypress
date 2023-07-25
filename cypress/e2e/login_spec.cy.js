describe('Login Test', () => {
    beforeEach(() => {
      cy.visit('index.html');
    });
  
    it('should log in with valid credentials', () => {
        cy.wait(1000);
      cy.get('#username').type('Admin',{delay: 100});
      cy.wait(2000);
      cy.get('#password').type('admin',{delay: 100});
      cy.wait(1000)
      cy.get('button[type="submit"]').click();
  
      // Wait for the login success message to exist and be visible before asserting
    //   cy.contains('Login successful!').should();
    });
  
    // it('should show an alert for blank credentials', () => {
    //   cy.get('button[type="submit"]').click();
    //   cy.on('window:alert', (text) => {
    //     expect(text).to.equal('Please enter both username and password.');
    //   });
    // });
  });
  