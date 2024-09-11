describe ('Text box with max charactes', ()=>{
 it('displays the appropriate remaining charactes count',
    ()=> {
      cy.visit('http://localhost:3000/example-3');
      cy.get('[data-cy="last-name-chars-left-count"]')
         .invoke('text') //we want text inside this span to be equal 15
         .should('equal', '15');

      cy.get('[data-cy="input-last-name"]').type('hello');

      cy.get('[data-cy="last-name-chars-left-count"]')
         .invoke('text') 
         .should('equal', '10');

    });

    it('prevents the user from typing more characters once max is exceeded', ()=>{
      cy.visit('http://localhost:3000/example-3');

      cy.get('[data-cy="input-last-name"]').type('hello wetery serteytru qqqwwwerr');


      cy.get('[data-cy="input-last-name"]')
         .should('have.attr', 'value', 'hello wetery se'); // this attribute is the code value={inputValue}


    });

}) 