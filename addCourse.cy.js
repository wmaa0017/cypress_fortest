/// <reference types="cypress" />


describe('Add course', () => {
  beforeEach(() => {
	  cy.visit('http://localhost:3000/login');
	  cy.get('label').contains('Manager').click();
	  cy.get('#login_email').type('manager@admin.com');
	  cy.get('#login_password').type('111111');
	  
      cy.get('.ant-btn > span').click().then(() => {
      cy.url().should('contains','dashboard/manager');
	 
	  cy.visit('http://localhost:3000/dashboard/manager/courses/add-course');
    });
  });

// it('should display title', () => {
//     cy.contains('Course Management Assistant');
//   });
  

	 
	 it('add courses', ()=> {
	 cy.get(':nth-child(4)>.ant-menu-submenu-title').click();
	
	 cy.get('#name'). type('testmwz');
	 cy.get('#teacherId'). type('Liang ');
	 cy.wait(3000);
	 cy.contains('Liangbo Jin').click();
	
	 cy.get('#type').click();
	 cy.get('.ant-select-item-option').contains('Python').click();
	 
	 cy.get('#startTime').click();
	 cy.get('.ant-picker-today-btn').click();
	 cy.wait(3000);
	 //const today = new Date();
	 //today.setTime(today.getTime()+24*60*60*1000);
	 //const tomorrow = today.getFullYear()+"-" + (today.getMonth()+1) + "-" + today.getDate();
	 
	 cy.get('#price'). type(6200);
	 cy.get( '#maxStudents'). type(30);
	 cy.get('.ant-input-group>.ant-select > .ant-select-selector >.ant-select-selection-item')
	 .click().then(()=> {
	 cy.get('.ant-select-item-option-content').contains('week').click();
	 });
	 cy.get('.ant-input-group >.ant-input-number >.ant-input-number-input-wrap >.ant-input-number-input')
	 .click().type(12);
	 cy.get('#detail').type('Wherethereareotherwaystousethecomputers hostname , the host can be specified as Wherethereareotherwaystousethecomputers hostname');
	 cy.get('[type="submit"]').contains('Create').click();
	 
	 cy.get('#schedule_chapters_0_name').type(1);
	 cy.get('#schedule_chapters_0_content').type(1);
	 //cy.get('.ant-select-selection-item').contains('Monday').click();
	 //#schedule > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div.ant-col.ant-col-8 > div > div > div > div > div > div > span.ant-select-selection-item
	 //cy.get('.ant-input-group >.ant-select >.ant-select-selector >.ant-select-selection-item')
	 //.click().then(()=> {
	 //cy.get("[title='Monday']").click();
	 //});
	 cy.get('#schedule .ant-select-selector').first().click();
     cy.get('.ant-select-item').contains('Monday').first().click();
	 //   
	 
	 cy.get('#schedule_classTime_0_time').click();
	 cy.get('.ant-picker-now').click();
	 cy.get('[type="submit"]').contains('Submit').click();
	 
	 //#schedule_classTime_0_time
	 //.ant-picker-now
	 cy.contains('Success').should('be.visible');
	 


	 });



  // it('can add course', () => {
  //   cy.get('#name').type('abcdef');
  //   cy.get('#teacherId').type('ee');
  //   cy.intercept('GET', '/api/teachers?query=ee').as('teachersRes');
  //   cy.intercept('GET', '/api/courses/type').as('types');

  //   cy.get('.ant-select-item-option-content').first().click();

  //   cy.get('#type').click();

  //   cy.get('.ant-select-item-option').contains('Visual Basic').click();

  //   cy.get('.ant-select-item-option').contains('Swift').click();

  //   cy.get('#startTime')
  //     .click()
  //     .then(() => {
  //       const title = format(addDays(new Date(), 2), 'yyyy-MM-dd');
  //       cy.get(`td[title=${title}]`).click(); // date-fn get to day
  //     });

  //   cy.get('#price').type(9);

  //   cy.get('#maxStudents').type(2);

  //   cy.get(
  //     '.ant-input-group > .ant-input-number > .ant-input-number-input-wrap > .ant-input-number-input'
  //   ).type(3);

  //   cy.get('.ant-input-group > .ant-select > .ant-select-selector')
  //     .click()
  //     .then(() => {
  //       cy.get('.ant-select-item-option-content').contains('week').click();
  //     });

  //   cy.get('#detail').type(
  //     ' The Cypress Dashboard Service is an optional web-based companion to the Test Runner.  It provides timely, simple and powerful insights on all your tests run at a glance.  With automatic parallelization and load balancing you can optimize CI and run significantly faster tests.  '
  //   );

  //   cy.get('button[type=submit]').contains('Create Course').click();
  //   cy.intercept('POST', '/api/courses', { fixture: 'course-add.json' }).as('addCourseRes');
  //   cy.wait('@addCourseRes').then((res) => {
  //     const data = res.response.body.data;

  //     expect(data).haveOwnProperty('id');
  //     expect(data).haveOwnProperty('scheduleId');
  //   });

  //   cy.get('#schedule').contains('Add Chapter').click().click();
  //   cy.get('input[placeholder="Chapter Name"]').first().type('hello');
  //   cy.get('input[placeholder="Chapter Name"]').eq(1).type('world');
  //   cy.get('input[placeholder="Chapter Name"]').last().type('hmmm');
  //   cy.get('input[placeholder="Chapter content"]').first().type('welcome to cms');
  //   cy.get('input[placeholder="Chapter content"]').eq(1).type('word world');
  //   cy.get('input[placeholder="Chapter content"]').last().type('good test');

  //   cy.get('#schedule').contains('Add Class Time').click().click();

  //   /**
  //    * 注意：第一组没有使用 否定选择器
  //    */
  //   cy.get('#schedule .ant-select-selector').first().click();
  //   cy.get('.ant-select-item').contains('Tuesday').first().click();
  //   cy.get('#schedule input[placeholder="Select time"]').first().click();
  //   cy.get('.ant-picker-time-panel-column').first().contains('20').scrollIntoView().click();
  //   cy.get('.ant-picker-time-panel-column').eq(1).contains('07').click();
  //   cy.get('.ant-picker-time-panel-column').eq(2).contains('05').click();
  //   cy.get('button').contains('Ok').click();

  //   cy.get('#schedule .ant-select-selector').eq(1).click();
  //   cy.get('.ant-select-dropdown:not(.ant-select-dropdown-hidden) .ant-select-item')
  //     .contains('Sunday')
  //     .click();
  //   cy.get('#schedule input[placeholder="Select time"]').eq(1).click();
  //   cy.get('.ant-picker-dropdown:not(.ant-picker-dropdown-hidden) .ant-picker-time-panel-column')
  //     .first()
  //     .click();
  //   cy.get('.ant-picker-dropdown:not(.ant-picker-dropdown-hidden) .ant-picker-time-panel-column')
  //     .eq(1)
  //     .click();
  //   cy.get('.ant-picker-dropdown:not(.ant-picker-dropdown-hidden) .ant-picker-time-panel-column')
  //     .eq(2)
  //     .contains('00')
  //     .click();
  //   cy.get('.ant-picker-dropdown:not(.ant-picker-dropdown-hidden) button').contains('Ok').click();

  //   cy.get('#schedule .ant-select-selector').eq(2).click();
  //   cy.get('.ant-select-dropdown:not(.ant-select-dropdown-hidden) .ant-select-item')
  //     .contains('Wednesday')
  //     .click();
  //   cy.get('#schedule input[placeholder="Select time"]').eq(2).click();
  //   cy.get('.ant-picker-dropdown:not(.ant-picker-dropdown-hidden) .ant-picker-time-panel-column')
  //     .first()
  //     .contains('07')
  //     .click();
  //   cy.get('.ant-picker-dropdown:not(.ant-picker-dropdown-hidden) .ant-picker-time-panel-column')
  //     .eq(1)
  //     .contains('07')
  //     .click();
  //   cy.get('.ant-picker-dropdown:not(.ant-picker-dropdown-hidden) .ant-picker-time-panel-column')
  //     .eq(2)
  //     .contains('05')
  //     .click();
  //   cy.get('.ant-picker-dropdown:not(.ant-picker-dropdown-hidden) button').contains('Ok').click();

  //   cy.get('#schedule button[type="submit"]').click();
  //   cy.intercept('PUT', '/api/courses/schedule', { code: 200, data: true, msg: 'success' }).as(
  //     'schedule'
  //   );
  //   cy.wait('@schedule', { timeout: 10 * 1000 }).then((res) => {
  //     const data = res.response.body.data;

  //     expect(data).eq(true);
  //   });

  //   cy.get('button').contains('Go Course').should('be.visible');
  //   cy.get('button').contains('Create Again').should('be.visible');
  // });

  // it('can select file to upload', () => {
  //   cy.getInputByType('file').attachFile('img.png');
  //   cy.get('.ant-modal-footer > .ant-btn-primary').click();
  //   cy.get('.ant-upload-span').find('img').should('have.attr', 'src');
  // });
});