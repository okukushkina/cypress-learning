describe ('Text box with max charactes', ()=>{
   beforeEach(()=>{
      cy.visit('/example-3');

      cy.get('[data-cy="last-name-chars-left-count"]')
         .as('charsLeftSpan');

         cy.get('[data-cy="input-last-name"]')
            .as('charInput');

   });

 it('displays the appropriate remaining charactes count',
    ()=> {
           cy.get('@charsLeftSpan')
        .then($charLeftSpan=>{ //create a function
            expect($charLeftSpan.text()).to.equal('15');
        });

      cy.get('@charInput').type('hello');

      cy.get('@charsLeftSpan')
         .invoke('text') 
         .should('equal', '10');

    });

    it('prevents the user from typing more characters once max is exceeded', ()=>{


      cy.get('@charInput').type('hello wetery serteytru qqqwwwerr');


      cy.get('@charInput')
         .should('have.attr', 'value', 'hello wetery se'); // this attribute is the code value={inputValue}


    });

}) 