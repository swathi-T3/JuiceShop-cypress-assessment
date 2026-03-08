describe('Adding new card details and validating them', () => { 

 let cardData // Declaring a variable to store the card details


// using beforeEach to resuse the login functionality
beforeEach(() => {  
  cy.Login();

  cy.fixture('carddetails').then((data) => {  // command Chain 
    cardData = data
  })
});

  it('Navigating to the Payments', () => { 
    // Task 2: Navigate to the Payments page and add new card details.
    cy.get('#navbarAccount').click();
    cy.get('button[aria-label="Show Orders and Payment Menu"]').click()
    cy.contains('My Payment Options').click();


    // validate the page
    cy.url().should('include', '/saved-payment-methods');
    cy.contains('Add new card').click();


  cy.contains('Name')
  .closest('mat-form-field')
  .find('input')
  .clear()
  .type(cardData.name)

  cy.contains('Card Number')
  .closest('mat-form-field')
  .find('input')
  .clear()
  .type(cardData.number)

  cy.contains('Expiry Month')
  .closest('mat-form-field')
  .find('select')
  .select(cardData.month)

  cy.contains('Expiry Year')
  .closest('mat-form-field')
  .find('select') 
  .select(cardData.year)

  cy.contains('Submit').click()
  
  // validating the card details are added successfully
  cy.contains('************1111').should('exist')  
  
  });
});
