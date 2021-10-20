import React from 'react';
import {Link} from 'react-router-dom';

class NavBar extends React.Component {
  render() {
    return (
      <nav>
        <Link to="/"> Home </Link>
        <Link to="/books/new">Add a New Book </Link>
        <Link to="/books"> All Books </Link>
      </nav>
    )
  }
}

export default NavBar;