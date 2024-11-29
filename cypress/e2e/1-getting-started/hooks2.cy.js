describe('Login Page Tests with Hooks', () => {
    // Runs once before all tests
    before(() => {
      cy.log('Before all tests: Setting up prerequisites');
       // Visit the login page
       
    });
  
    // Runs before each test
    beforeEach(() => {
      cy.log('Before each test: Ensuring the page is refreshed');
      cy.reload(); // Reload the page to start fresh for each test
    });
  
    // Runs after each test
    afterEach(() => {
      cy.log('After each test: Log cleanup actions if needed');
    });
  
    // Runs once after all tests
    after(() => {
      cy.log('After all tests: Cleaning up and final actions');
      cy.clearCookies(); // Clear cookies after all tests are done
    });
  
    // Test case 1: Verify the email address is visible
    it('Should retrieve and log the email address', () => {
      cy.log('Test 1: Retrieve the email address');
      cy.visit('https://the-internet.herokuapp.com/forgot_password');
      cy.wait(2000); 

      cy.get('#email').type('tomsmith');
      cy.wait(2000);
      
      cy.get('#form_submit').click();

    });
  
  
  });
  