import React from 'react';
import ReviewCreateForm from '../components/ReviewCreateForm.js';
import Reviews from '../components/Reviews.js';

class ReviewsContainer extends React.Component {
  render () {
    return (
      <div>
        Reviews Container
        <ReviewCreateForm />
        <Reviews reviews={this.props.book[0].attributes.reviews}/>
      </div>
    )
  }
}

export default ReviewsContainer;