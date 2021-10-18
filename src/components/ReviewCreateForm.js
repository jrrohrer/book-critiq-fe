import React from 'react';
import {connect} from 'react-redux';


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
    // addReview(this.state, this.props.book[0].id)
  }

  render () {
    return (
      <div>
        <h2>Create a New Review</h2>
        <form onSubmit={this.handleOnSubmit}>
          <label>Review Title:</label><br/>
          <input type="text" name="title" value={this.state.title} onChange={this.handleOnChange}/><br/>
          <label>Content:</label><br/>
          <textarea name="content" value={this.state.content} onChange={this.handleOnChange}/><br/>
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default connect(null)(ReviewCreateForm);