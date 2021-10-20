import React from 'react';
import Container from 'react-bootstrap/Container';


class Home extends React.Component {
  render() {
    return (
      <Container className='p-3'>

          <h1 className='header'>Welcome to BookCritiq</h1>
          <p>Helping fellow readers choose their next book by offering honest reviews.</p>

      </Container>
    )
  }
}

export default Home;