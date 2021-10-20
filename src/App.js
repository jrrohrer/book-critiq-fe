import React from 'react';
import './App.css';
import BooksContainer from './containers/BooksContainer.js';
import NavBar from './components/NavBar.js';


class App extends React.Component {

  render() {
    return (
      <div className="App">
        <NavBar />
        <BooksContainer />
      </div>
    )
  }
}


export default App;
