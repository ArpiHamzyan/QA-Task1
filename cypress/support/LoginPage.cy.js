class LoginPage 
{
    static visitAndLogin(email, password) 
    {
      cy.visit('https://playground.testingart.com');
 
      cy.get('#email-field') .type(email);
      cy.get('#password-field').type(password);
     
      cy.get('#submitBtn').click();
    }
}
  
  export default LoginPage;