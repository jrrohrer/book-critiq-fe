import React from 'react';
import './App.css';
// import {connect} from 'react-redux';
import BooksContainer from './containers/BooksContainer.js';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <BooksContainer />
      </div>
    )
  }
}

// const mapStateToProps = (state) => {
//   // accessing values from our store as props
//   return {
//     books: state.books
//   }
// }

export default (App);
