describe ('Text box with max charactes', ()=>{
 it('displays the appropriate remaining charactes count',
    ()=> {
      cy.visit('http://localhost:3000/example-2');
      cy.get('span')
         .invoke('text') //we want text inside this span to be equal 15
         .should('equal', '15');

      cy.get('input').type('hello');

      cy.get('span')
         .invoke('text') 
         .should('equal', '10');

    });

    it('prevents the user from typing more characters once max is exceeded', ()=>{
      cy.visit('http://localhost:3000/example-2');

      cy.get('input').type('hello wetery serteytru qqqwwwerr');


      cy.get('input')
         .should('have.attr', 'value', 'hello wetery se'); // this attribute is the code value={inputValue}


    });

}) 