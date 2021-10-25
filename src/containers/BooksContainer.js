// Container component for all book components

import React from 'react';
import {connect} from 'react-redux';
import {Route, Switch} from 'react-router-dom'
import BooksList from '../components/BooksList.js';
import BookCreateForm from '../components/BookCreateForm.js';
import BookShow from '../components/BookShow.js';
import {fetchBooks} from '../actions/fetchBooks.js';

class BooksContainer extends React.Component {

  componentDidMount() {
    this.props.fetchBooks();
  }

  // setting up routes here so that they have access to the props that they need. This component is already fetching and passing around props, so it seems the best place for routes.

  render() {
    return (
      <div>
        <Switch>
          <Route path='/books/new' render={(routeProps) => <BookCreateForm {...routeProps} /> } />
          <Route path='/books/:id' render={(routeProps) => <BookShow {...routeProps} books={this.props.books} />} />
          <Route path='/books' render={(routeProps) => <BooksList {...routeProps} books={this.props.books}/> } />
        </Switch>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    books: state.books
  }
}

export default connect(mapStateToProps, {fetchBooks})(BooksContainer);
// first argument to connect gives us access to the data in the store, the second argument (either mapDispatchToState or an action creator function) allows us to change the store directly from this component.