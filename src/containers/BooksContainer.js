// Container component for all book components

import React from 'react';
import {connect} from 'react-redux';
import {Route, Switch} from 'react-router-dom'
import BooksList from '../components/BooksList.js';
import BookCreateForm from '../components/BookCreateForm.js';
import BookShow from '../components/BookShow.js';
import {fetchBooks} from '../actions/fetchBooks.js';
import SuccessModal from '../components/SuccessModal.js';
// import Search from '../components/Search.js';

class BooksContainer extends React.Component {
  state = {
    showModal: false
  }

  toggleModal = () => {
    this.setState({ showModal: !this.state.showModal})
  }

  componentDidMount() {
    this.props.fetchBooks();
  }

  render() {
    return (
      <div>
        {/* <Search books={this.props.books} /> */}
        <Switch>
          <Route path='/books/new' render={(routeProps) => <BookCreateForm {...routeProps} toggle={this.toggleModal}/> } />
          <Route path='/books/:id' render={(routeProps) => <BookShow {...routeProps} books={this.props.books} />} />
          <Route path='/books' render={(routeProps) => <BooksList {...routeProps} books={this.props.books}/> } />
        </Switch>
        <SuccessModal isOpen={this.state.showModal} toggle={this.toggleModal} />
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