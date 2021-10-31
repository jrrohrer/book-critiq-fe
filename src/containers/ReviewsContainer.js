// Container component for rendering Review components

import React from 'react';
import ReviewCreateForm from '../components/ReviewCreateForm.js';
import Reviews from '../components/Reviews.js';
import {Route, Switch} from 'react-router-dom';
import SuccessModal from '../components/SuccessModal.js';

class ReviewsContainer extends React.Component {
  state = {
    showModal: false
  }

  toggleModal = () => {
    this.setState({ showModal: !this.state.showModal })
  }

  render () {
    return (
      <div>
        <Switch>
          <Route path='/books/:id/reviews/new' render={(routeProps) => <ReviewCreateForm {...routeProps} book={this.props.book} toggle={this.toggleModal}/> } />
        </Switch>
        <Reviews reviews={this.props.book[0].attributes.reviews}/>
        <SuccessModal isOpen={this.state.showModal} toggle={this.toggleModal} />
      </div>
    )
  }
}

export default ReviewsContainer;