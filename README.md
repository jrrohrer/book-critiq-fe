# Welcome to BookCritiq

This is a webapp for reviewing books. It was built with (create-react-app) React/Redux and styled with Bootstrap.

You can find the Rails API repo here: <a href="https://github.com/jrrohrer/book-critiq-be"> BookCritiq-BE </a>

## Notes About the API
  #### The Rails API backend comes with a seed file containing some books to populate the site. 
    To install, clone the repo, bundle install, and set your default port to 3001 so that the endpoints will work correctly when running locally.
    Then run `rails db:migrate` and `rails db:seed` to populate the database.

## Notes About the Front End
  #### This app was built with React 17.0.2, and incorporates the Redux and Thunk libraries. 
    To install, clone this repo, then run `npm install` to load the dependencies. Run `npm start` to start the server and launch the app in your browser.