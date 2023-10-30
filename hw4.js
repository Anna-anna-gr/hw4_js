it('passes', () => {
    cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com/');
  
  
    cy.log('локатор за назвою класу');
    //локатор за назвою класу
    cy.get('[alt="Material Light Theme"]').click();
    cy.get('[title="Forms"]').click();
    cy.get('[title="Form Layouts"]').click();

})