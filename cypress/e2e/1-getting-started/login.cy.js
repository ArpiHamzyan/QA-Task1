
import LoginPage from '../../support/LoginPage.cy';

describe('Login Page Tests', () => {
    let emailText;
    let passwordText;

    before(() => {
        cy.visit('https://playground.testingart.com');
        
        cy.get('#root > main > div > form > p:nth-child(5)')
          .invoke('text').then((text) => {
            emailText = text.replace('email:', '').trim(); 
          });
    
        cy.get('#root > main > div > form > p:nth-child(6)') 
          .invoke('text').then((text) => {
            passwordText = text.replace('password:', '').trim();
          });
      });
    
 
      it('Should login using extracted credentials', () => {
        LoginPage.visitAndLogin(emailText, passwordText);


        cy.get('#root > div:nth-child(2) > div.MuiBox-root.css-1j64xyi > h1').should('be.visible').then(() => {
            cy.log('Successfully entered the page!');
      });

      });

      
  
  
  });
  