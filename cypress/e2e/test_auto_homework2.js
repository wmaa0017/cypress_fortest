/// <reference types="cypress" />
//测试文档链接 https://docs.google.com/spreadsheets/d/1BCU15rM_WHnQMS7GF29DzejOtOkP4-iQYojqpwsTMmo/edit?usp=sharing
describe('cms home page', () => {
  beforeEach(() => {
    cy.visit('http://cms-lyart.vercel.app');
  });

  it('should have 5 links on the nevigation bar', () => {
    cy.get('#header a').should('have.length', '5').and('have.attr', 'href');
  });

it('able to change pages by clicking buttons on the nevigation bar', () => {
    //cy.visit('http://localhost:3000/events');
	cy
	.get("#menu > :nth-child(1) > :nth-child(2) > a").click();
	//cy.get('a[href="/events"]').filter().click()
	//<a href="/events">Courses</a>
   // cy.get('#menu > ul:nth-child(1) > li.current > a').click();
    // "button[id='main2'] Upcoming events
	cy.contains('Upcoming events').should('be.visible');
	cy.get("#logo").click();
	
	cy.contains('Awesome results of our students').should('be.visible');
	
	cy.get("#menu > :nth-child(2) > :nth-child(1) > a").click();
	cy.contains('merit student').should('be.visible');
	cy.get("#logo").click();
	cy.contains('Awesome results of our students').should('be.visible');
	//#menu > ul:nth-child(2) > li.header__SignIn-sc-19law7x-0.btYcai > a
	cy.get("#menu > :nth-child(2) > :nth-child(3) > a").click();
	cy.contains('Course Management Assistant').should('be.visible');
	cy.get("#logo").click();
	cy.contains('Awesome results of our students').should('be.visible');
  });

  it('Header should always be visible when scrolling', () => {
    cy.scrollTo('bottom');
    cy.get('#logo').should('be.visible');
  });

});
