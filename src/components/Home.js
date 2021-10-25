// Landing page w/ welcome message and link to BooksList
import React from 'react';
import {Link} from 'react-router-dom';
import {Container} from 'react-bootstrap'

const Home = () => {
  return(
    <Container className="p-5 mt-4 bg-light text-center rounded shadow">
      <h1 className='display-5 fw-bold'>Welcome to BookCritiq</h1>
      <p className='fs-4'>Helping fellow readers choose their next book by offering honest reviews.</p>
      <Link to='/books'><button className='btn btn-secondary btn-lg shadow' type='button'>Find a Book To Review</button></Link>
    </Container>
  )
}

export default Home;