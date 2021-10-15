// container components should render other components, pass them data if they need it, and contain functions (callbacks, componentDidMount, etc). Typically class components

import React from 'react';
import {connect} from 'react-redux';
import BooksList from '../components/BooksList.js';
import BookCreateForm from '../components/BookCreateForm.js';
import {fetchBooks} from '../actions/fetchBooks.js';

class BooksContainer extends React.Component {

  componentDidMount() {
    console.log("inside componentDidMount")
    this.props.fetchBooks();
  }

  render() {
    return (
      <div>
        Books Container
        <BooksList books={this.props.books} />
        <BookCreateForm />
      </div>
    )
  }
}

// get redux store and map it to props
const mapStateToProps = state => {
  return {
    books: state.books
  }
}

export default connect(mapStateToProps, {fetchBooks})(BooksContainer);
// first argument to connect gives us access to the data in the store, the second argument (either mapDispatchToState or an action creator function) allows us to change the store directly from this component.