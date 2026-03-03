describe('Creating an API test that adds a unique card details', () => {

    beforeEach(() => {
        cy.Login();

    });
    it('Verify API Test for adding Unique card details', () => {
        cy.request({
            method: 'Post', // HTTP method, POST , it is used to send data to the server to create a new resource.
            url: 'http://localhost:3000/rest/user/login', // API endpoint URL, it is the URL to which the request is sent.
            body:{
                "email": "swathi@TestAssign.com",
                "password": "User@12345"
            }
        }).then((response) =>{
            expect(response.status).to.eq(200) //validating the response status code, it checks if the response status code is 200, which is a successful request.

            // then need to store the token from the response body to use it in the next request to add card details
            const token = response.body.authentication.token; // Extracting the token from the response body, it gets the authentication token from the response body, which is needed for authorization in other requests.

            // after getting the token, we can make another API request to add card details
            cy.request({
                method: 'Post',
                url : 'http://localhost:3000/api/Cards',
                headers : {
                    Authorization : `Bearer ${token}` // Authorization header with the token, it includes the token in the Authorization header using the Bearer scheme, which is required for authenticated requests.
                    
                },
                body : {
                    "name": "Swathi",
                    "number": "4111111111111111",
                    "expiryMonth": "12",
                    "expiryYear": "2025"
                }
            })
                .then((response) => {
                    expect(response.status).to.eq(201) // validating the response status code for adding card details, it checks if the response status code is 200, indicating that the card details were added successfully.
                   expect(response.body.status).to.eq('success') // validating the response body for the presence of 'id', it checks if the response body contains an 'id' property, which indicates that the card was created successfully.
                })  
                

        }) 
        
    });
});