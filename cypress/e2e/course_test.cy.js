/// <reference types="cypress" />

//describe('cms login page', () => {
  //beforeEach(() => {
    //cy.visit('https://cms-lyart.vercel.app/login');
  //});
  
describe('Login page', ( () => {
  beforeEach(function () {
    cy.visit('https://cms-lyart.vercel.app/login');
    cy.fixture('cms.users').then((users) => {
      this.users = users;
    });
  });
it('should display title', () => {
    cy.contains('Course Management Assistant');
  });
  
 roles.forEach((role) => {
       cy.get('label').contains(role);
     });
 
     cy.get('input[type=email]').should('be.visible');
 
     cy.get('input[type=password]').should('be.visible');
 
     // 这个元素不可见，opacity:0
     cy.get('input[type=checkbox]').should('be.checked');
 
     cy.get('button[type=submit]').should('be.visible');
   }); 
