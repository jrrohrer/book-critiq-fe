import React from 'react';
import {connect} from 'react-redux';
import {addReview} from '../actions/addReview.js';
import {Form, Button, Container} from 'react-bootstrap';


// using a class component because this will contain a controlled form.



class ReviewCreateForm extends React.Component {
  state = {
    title: '',
    content: ''
  }
  
  handleOnChange = (event) => {
    this.setState({
      [event.target.name] : event.target.value
    })
  }
  
  handleOnSubmit = (event) => {
    event.preventDefault();
    this.props.addReview(this.state, this.props.book[0].id, this.props.history)
    this.setState({
      title: '',
      content: ''
    })
  }

  render () {
    return (
      <Container className='w-50 p-5'>
        <h2 className='header text-center'>Create a New Review</h2>
        <Form onSubmit={this.handleOnSubmit} className='mx-auto'>
          <Form.Group className='mb-3' controlId="title">
            <Form.Label>Review Title:</Form.Label>
            <Form.Control type="text" name="title" value={this.state.title} onChange={this.handleOnChange} required/>
          </Form.Group>
          <Form.Group className='mb-3' controlId="content">
            <Form.Label>Content:</Form.Label>
            <Form.Control as='textarea' name="content" value={this.state.content} onChange={this.handleOnChange} style={{height: '100px'}}/>
          </Form.Group>
          <div className='d-grid gap-2 col-6 mx-auto'>
            <Button variant='secondary' type='submit' className='m-auto shadow'>Submit</Button>
          </div>
        </Form>
      </Container>
    )
  }
}

export default connect(null, {addReview})(ReviewCreateForm);