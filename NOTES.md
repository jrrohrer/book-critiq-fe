# Notes

## 10-13-21
* used create-react-app to generate the frontend repo
* removed parts I don't need
* installed packages needed (redux, redux-thunk, react-redux, react-bootstrap, etc)

## 10-14-21
* implemented redux store, first reducer, and first action; tested them with a fetch request to the back end.

## 10-15-21
* created BookContainer, BookList, components
* passed fetched data down through BookContainer to it's child components
* rendered a list of books in the BookList component
* created the BookCreateForm component and form
* created action and reducer case for post fetch from BookCreateForm
* added image_urls to book objects
* nested reviews inside of books routes in the back end

## 10-16-21
* add react router and wrap the App component in router tags.
* add BookShow page component and adjust list and container components to accomodate
* change element from li to div for displaying books
* set up routes for book components
  * ran into problems here. ended up using the `useParams()` hook to access the query params from the URL so that I could render the correct book on the page.
  * other problem...correct book now renders, but there are errors on refresh

## 10-18-21
* add dynamic routing for book show pages
* refactor routes and display of book data on show page
* add reviews components and boilerplate code; connect review components
* attempt to fix bug where data is lost on page refresh
* add props to be passed to review child components
* create controlled review create form

## 10-19-21
* working post fetch for review create form
* refactor to get the review component to reload when a new review is submitted through the create review form
* create deleteReviews action and case in reducer
* implement delete review functionality
* **FINALLY** fixed the bug where refreshing on BookShow component lost data. Needed a conditional that told it to return null if there are no books to iterate through, which gives time for the fetchBooks action to re-run after the page refreshes.

## 10-20-21
* add error handling in fetch requests
* add NavBar component
* add Home component

## Requirements Checklist

[x] The code should be written in ES6 as much as possible
[x] Use the create-react-app generator to start your project.
[x] Your app should have one HTML page to render your react-redux application
[x] There should be 5 stateless components
[x] There should be 3 routes
[x] The Application must make use of react-router and proper RESTful routing 
[x] Use Redux middleware to respond to and modify state change
[x] Make use of async actions and redux-thunk middleware to send data to and receive data from a server
[x] Your Rails API should handle the data persistence with a database. You should be using fetch() within your actions to GET and POST data from your API - do not use jQuery methods.
[x] Your client-side application should handle the display of data with minimal data manipulation
[ ] Your application should have some minimal styling: feel free to stick to a framework (like react-bootstrap), but if you want to write (additional) CSS yourself, go for it!