import React from 'react';
import {Link} from 'react-router-dom';


class Home extends React.Component {
  render() {
    return (
      <div className="p-5 mb-4 bg-light text-center">
          <h1 className='display-5 fw-bold'>Welcome to BookCritiq</h1>
          <p className='fs-4'>Helping fellow readers choose their next book by offering honest reviews.</p>
          <Link to='/books'><button className='btn btn-secondary btn-lg' type='button'>Find a Book To Review</button></Link>
      </div>
    )
  }
}

export default Home;