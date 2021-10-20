import React from 'react';
// import {Link} from 'react-router-dom';
import {Navbar, Nav, Container} from 'react-bootstrap';

class NavBar extends React.Component {
  render() {
    return (
      <>
        <Navbar collapseOnSelect expand="sm" bg="primary" variant="dark">
          <Container>
            <Navbar.Brand href="/">BookCritiq</Navbar.Brand>
            <Navbar.Toggle aria-controls='responsive-navbar-nav' />
            <Navbar.Collapse id='responsive-navbar-nav'>
              <Nav>
                <Nav.Link href='/'>Home</Nav.Link>
                <Nav.Link href='/books'>All Books</Nav.Link>
                <Nav.Link href='/books/new'>Create New Book</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    )
  }
}

export default NavBar;