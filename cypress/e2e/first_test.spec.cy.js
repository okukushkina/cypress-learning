describe('Heading text',() =>{
    it('contains the correct title', ()=> //anonymos function
    {
        cy.visit('http://localhost:3000/example-1');
        cy.get('h1') //get this element
            .invoke('text') //get inner text from the element, (Invoke a function on the previously yielded subject.)
            .should('equal', 'My Awesome Web Application'); //verify the text

    });
}
)

