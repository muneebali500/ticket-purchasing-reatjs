# Ticket Purchasing - Frontend

## Introduction

The project showcases a mock checkout page for buying tickets to a show using Frontend Library, ReactJS. Users can select a show from a list of upcoming shows, select the quantity, enter their basic billing information and see their final cost with fees before checking out.

## User Interface (UI)

### Features

- There are 4 main pages as Home, Checkout, Billing Page, and 404Error page.
- Home page has a Header, Show List Section, and a Footer.
- Show List section shows list of upcoming events with info like show name, price per ticket and buy tickets button.
- When user clicks on "Buy Tickets" button, user is navigated dynamically to billig info page. The user fills the required basic billing info and when user clicks on "Checkout" button, user is navigated to checkout page. The filled data is stored in LocalStorage for later use.
- Checkout page displays the basic billing info, order details and payment method details. The user chooses the payment method, fills in the required info and places the order by clicking the "Place Order" button.
- There is also a "Cancel Order" button which is when clicked, cancels the order. When order is cancelled, the data in local storage is removed and user is navigated to home page.
- Apart from the above pages mentioned there is also a 404error page that will be displayed if the user tries to navigate to an illegal route/path.
- Also, I have created some reusable components for optimization.

## Technologies Used

### Languages, Frameworks, Libraries & Programs

- [JSX](https://reactjs.org/docs/introducing-jsx.html) - build up layout and content of the application.
- [SCSS](https://sass-lang.com/documentation) - for adding custom styling.
- [React.js](https://reactjs.org/) - used Functional Components with React Hooks to add functionalities throughout the application.
- [Visual Studio Code](https://code.visualstudio.com/) - the code editor being used to build the project.
- [Chrome DevTools](https://developer.chrome.com/docs/devtools/) - used heavily for debugging during development process.
- [Git](https://git-scm.com/) - the Git feature in VS Code was used for version control and push to github.
- [Github](https://github.com/) - Github is used to store project's code remotely.

## Deployment

#### Development

The project was developed using VS Code editor and its integrated version control feature to commit gits, which are then pushed to GitHub in order to store the codes remotely.

#### Forking the repository

1. Log in to GitHub and navigate to this project's repository: [ticket-purchasing-reactjs](https://github.com/muneebali500/ticket-purchasing-reatjs)
2. Just above the navigation menu of the repository (above the Settings button) locate the Fork button
3. The original copy of the repository is now copied on your GitHub account which allows you to view and/or work on the codes without affecting the original work
