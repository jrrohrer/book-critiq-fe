import React from 'react';
import ReviewCreateForm from '../components/ReviewCreateForm.js';
import Reviews from '../components/Reviews.js';
import {Route, Switch} from 'react-router-dom';

class ReviewsContainer extends React.Component {
  render () {
    return (
      <div>
        <Switch>
          <Route path='/books/:id/reviews/new' render={(routeProps) => <ReviewCreateForm {...routeProps} book={this.props.book} /> } />
        </Switch>
        {/* <ReviewCreateForm book={this.props.book}/> */}
        <Reviews reviews={this.props.book[0].attributes.reviews}/>
      </div>
    )
  }
}

export default ReviewsContainer;