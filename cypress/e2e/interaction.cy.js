describe('Basic page interactions', () => {
beforeEach(()=>{
    cy.visit('/example-4');

});

it('sets the headers text to the item\'s name when double clicked', ()=>{
    cy.get('[data-cy="box-1-items-list"]>:nth-child(2)') //>:nth-child(2) - select he 2nd item in the list
        .dblclick(); //double-click command

        cy.get('[data-cy=box-1-selected-name]')
        .invoke('text')
        .should('equal', 'Option Two');
});

it('displayes the correct count for the number of selected checkboxes', ()=>{
    cy.get('[data-cy="box-2-checkboxes"]>:nth-child(1) input') //select 1st checkbox
    .check(); //checkbox

    cy.get('[data-cy="box-2-checkboxes"]>:nth-child(2) input') //select 2nd checkbox
    .check(); //checkbox

    cy.get('[ data-cy="box-2-selected-count"]')
    .invoke('text')
    .should('equal', '2');
});

it('displayes the name of the currently selected item', ()=>{
    cy.get('[data-cy="box-3-dropdown"]')
        .select('Option Three');

    cy.get('[data-cy="box-3-selected-name"]')
        .invoke('text')
        .should('equal', 'Option Three');

})

})