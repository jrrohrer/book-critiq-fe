import React from 'react';
import BooksContainer from './containers/BooksContainer.js';
import NavBar from './components/NavBar.js';
import {Route, Switch} from 'react-router-dom';
import Home from './components/Home.js'

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <NavBar />
        <BooksContainer />
        <Switch>
          <Route exact path="/" component={Home}/>
        </Switch>
      </div>
    )
  }
}


export default App;
