# Welcome to BookCritiq

BookCritiq is a web app for reviewing books. 
Built with React, Redux, JavaScript, and Bootstrap with a custom Rails API backend. 

You can find the Rails API repo here: <a href="https://github.com/jrrohrer/book-critiq-be"> BookCritiq-BE </a>

## Project Status

This project is currently in development. Users can anonymously submit reviews for existing books, or add new books to the database. Functionality for user profiles and comments planned for the future.

## Project Screenshots
As of 10-21-21

### Landing Page
![Landing Page](https://user-images.githubusercontent.com/35381492/138381754-4bb8ca52-22a0-408d-bc4d-b4aade5ecdaa.png)

### All Books
![All Books](https://user-images.githubusercontent.com/35381492/138381892-a981ea61-81de-4ec8-935d-b82851ea145f.png)

### Book Show Page with a Review
![Book Show Page](https://user-images.githubusercontent.com/35381492/138381948-518c7618-5118-431e-b371-5ad93196667a.png)

### Book Show Page with Review Form Open
![Review Form](https://user-images.githubusercontent.com/35381492/138382008-03fbec6c-46e4-4fc9-810e-070df907fe5f.png)

### Create New Book Form
![New Book Form](https://user-images.githubusercontent.com/35381492/138382061-33802c58-08b0-4c8b-ad6b-777d0f01951c.png)

## Installation and Setup

Clone down this repository, as well as the backend repository linked at the top of this Readme. You will need `node` and `npm` installed on your machine.

### Installation

Run `npm install` to get the necessary packages.

### To Start the Server

Run `npm start`

### To view the page (if it doesn't open automatically)

Visit `http://localhost:3000/` in your browser.

## Reflection

This project is my final project for the Software Engineering bootcamp at the Flatiron School. The purpose of this project was to use React/Redux to build out an open-ended project. I set out to build a web app for reviewing books, as I felt that this incorporates several patterns I will need to be familiar with out in the world. As the project is now, it meets the requirements for assessment, but I plan to come back to it post-graduation and add functionality for logging in, creating an account, and keeping a profile of books that you personally have reviewed. I also would like to add the ability to make comments on reviews.

### Obstacles

The biggest obstacle for this project was using the fast-jsonapi serializer on the back end. It nested the JSON data in a strange way that made the data more difficult to work with on the front end. 

Other obstacles I encountered was attempting to use the newest version of Bootstrap for styling. I didn't know anything about Bootstrap before building this project, so I still have a lot to learn. Using Bootstrap to apply classNames to elements to implement styling probably saved me a lot of time, but customizing the colors or fonts in any way was difficult for me, since I didn't quite understand where to place those rules.

I started this app using `create-react-app` to minimize initial setup, then applied additional libraries like `redux`, `react-redux`, `redux-thunk`, `bootstrap`, `react-bootstrap` as needed to provide the functionality the app needed. 