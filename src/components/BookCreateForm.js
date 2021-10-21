// I want a controlled form, so this is a class component with local state holding form values that will update the store on submit...

import React from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import {connect} from 'react-redux';
import {addBook} from '../actions/addBook.js'

class BookCreateForm extends React.Component {
  state = {
    title: '',
    author: '',
    description: '',
    image_url: ''
  }

  handleOnChange = (event) => {
    this.setState({
      // this is the notation for updating an object's key value pairs. without the square brackets, we would be adding a key of (literally) "event.target.name" with a value of whatever is typed in. So we're using bracket notation to update the state object with keys of the input's name with a value of what the user types in.
      [event.target.name]: event.target.value
    })
  }

  handleOnSubmit = (event) => {
    // now that we have all our form data, we want to save the thing we're making in the DB, and then update the Redux store.
    debugger;
    event.preventDefault();
    this.props.addBook(this.state, this.props.history);
    // clears the form after sending the data on its way
    this.setState({
      title: '', 
      author: '',
      description: '',
      image_url: ''
    })
  }

  render() {
    return (
      <Container className='w-50'>
        <h2 className="header text-center">Add a New Book</h2>
        <Form onSubmit={this.handleOnSubmit} className="mx-auto">
          <Form.Group className="mb-3" controlId="title">
            <Form.Label>Book Title</Form.Label>
            <Form.Control type="text" name="title" value={this.state.title} onChange={this.handleOnChange} placeholder="Title"  required/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="author">
            <Form.Label>Author Name</Form.Label>
            <Form.Control type="text" name="author" value={this.state.author} onChange={this.handleOnChange} placeholder="Author"  required/>
          </Form.Group>
          <Form.Group controlId="description">
            <Form.Label>Description</Form.Label>
            <Form.Control as="textarea" name="description" value={this.state.description} onChange={this.handleOnChange} style={{height: '100px'}}  required/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="image_url">
            <Form.Label>Cover Image URL</Form.Label>
            <Form.Control type="text" name="image_url" value={this.state.image_url} onChange={this.handleOnChange}  required/>
          </Form.Group>
          <div className='d-grid gap-2 col-6 mx-auto'>
            <Button variant='secondary' type='submit'>Submit</Button>
          </div>
        </Form>
      </Container>
    )
  }
}


export default connect(null, {addBook})(BookCreateForm);
// connect in this component is not reading from state, but updating it, so we pass in the action where the mapDispatchToState function would go.