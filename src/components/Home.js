// Landing page w/ welcome message and link to BooksList
import React from 'react';
import {Link} from 'react-router-dom';
import {Container, Button} from 'react-bootstrap'
import SignUpModal from './SignUpModal.js'

class Home extends React.Component {
  state = {
    showModal: false
  }

  toggleModal = () => {
    this.setState({ showModal: !this.state.showModal })
  }

  render() {
    return(
      <Container className="p-5 mt-4 bg-light text-center rounded shadow">
        <h1 className='display-5 fw-bold'>Welcome to BookCritiq</h1>
        <p className='fs-4'>Helping fellow readers choose their next book by offering honest reviews.</p>
        <Button className="btn btn-secondary btn-lg shadow m-3" onClick={this.toggleModal}>Sign Up</Button>
        <Link to='/books'><Button className='btn btn-secondary btn-lg shadow' type='button'>Find a Book To Review</Button></Link>

        <SignUpModal isOpen={this.state.showModal} toggle={this.toggleModal} />
      </Container>
    )
  }

}

export default Home;