// I want a controlled form, so this is a class component with local state holding form values that will update the store on submit...
// Should this component be controlled through redux? It could potentially double as an edit form.

import React from 'react';
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
    event.preventDefault();
    this.props.addBook(this.state);
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
      <div>
        <h2>Add a New Book</h2>
        <form onSubmit={this.handleOnSubmit}>
          <label>Book Title</label><br/>
          <input type="text" name="title" value={this.state.title} onChange={this.handleOnChange} placeholder="Title"/>
          <br/>
          <label>Author Name</label><br/>
          <input type="text" name="author" value={this.state.author} onChange={this.handleOnChange} placeholder="Author"/>
          <br/>
          <label>Description</label>
          <br/>
          <textarea name="description" value={this.state.description} onChange={this.handleOnChange} />
          <br/>
          <label>Cover Image URL</label>
          <br/>
          <input type="text" name="image_url" value={this.state.image_url} onChange={this.handleOnChange}/>
          <br/>
          <input type="submit" value="Submit"/>
        </form>
      </div>
    )
  }
}


export default connect(null, {addBook})(BookCreateForm);
// connect in this component is not reading from state, but updating it, so we pass in the action where the mapDispatchToState function would go.