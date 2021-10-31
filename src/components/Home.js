// Landing page w/ welcome message and link to BooksList
import React from 'react';
import {Link} from 'react-router-dom';
import {Container, Button} from 'react-bootstrap'
import SuccessModal from './SuccessModal.js'

const Home = () => {
  return(
    <Container className="p-5 mt-4 bg-light text-center rounded shadow">
      <h1 className='display-5 fw-bold'>Welcome to BookCritiq</h1>
      <p className='fs-4'>Helping fellow readers choose their next book by offering honest reviews.</p>
      <Link to='/books'><Button className='btn btn-secondary btn-lg shadow m-3'>Find a Book To Review</Button></Link>
      <Button className="btn btn-secondary btn-lg shadow m-3">Sign Up</Button>
      <SuccessModal />
    </Container>
  )
}

export default Home;