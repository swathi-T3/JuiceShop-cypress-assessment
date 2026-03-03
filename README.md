# OWASP Juice Shop - Cypress Automation Assessment
Open Web Application Security Project

##  Project Overview

This project contains automated UI and API test cases for the OWASP Juice Shop application using Cypress.

The application is executed locally using Docker and tested using Cypress end-to-end framework.

---

##  Tech Stack Used

- Cypress
- JavaScript
- Node.js
- Docker
- Git & GitHub

---

##  Tasks Completed

###  Task 1:
- Manually created a new user in Juice Shop
- Stored credentials in `new-user.json`
- Implemented login functionality inside `beforeEach()` hook

###  Task 2:
- Created a UI test
- Navigated to "My Payments" from homepage
- Added card details through UI

###  Task 3:
- Created an API test
- Added unique card details using `cy.request()`

---

##  Project Structure
    cypress/
      ├── e2e/
      ├── fixtures/
      ├── support/
    cypress.config.js
    package.json
    .gitignore
    README.md


---

##  How To Run This Project

### 1️ Install dependencies
npm install

### 2️ Start Juice Shop using Docker
docker run -d -p 3000:3000 bkimminich/juice-shop
Open in browser: http://localhost:3000/

### 3️ Run Cypress
npx cypress open

---

---

##  Key Implementation Highlights

- Used reusable login setup with `beforeEach`
- Implemented stable locator strategy
- Used fixture for test data
- Generated unique card data in API test
- Followed clean code practices

---

##  Author

Swathi Thoorpati



