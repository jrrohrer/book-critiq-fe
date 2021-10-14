import React from 'react';
import './App.css';
import {connect} from 'react-redux';
import {fetchBooks} from './actions/fetchBooks.js'

class App extends React.Component {

  componentDidMount(){
    // fetch('http://localhost:3001/api/v1/books')
    //   .then(response => response.json())
    //   .then(data => console.log(data))
  }
  render() {
    return (
      <p>Welcome to BookCritiq</p>
    )
  }
}

// const mapStateToProps = (state) => {
//   // accessing values from our store as props
//   return {
//     books: state.books
//   }
// }

export default connect(null, {fetchBooks})(App);
// first argument to connect gives us access to the data in the store, the second argument (either mapDispatchToState or an action creator function) allows us to change the store directly from this component.