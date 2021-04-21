import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    let associatedReviews = this.props.reviews.filter(review => review.restaurantId === this.props.restaurantId)
    return (
      <ul>
        {associatedReviews.map(review => 
          <Review 
            key={review.id} 
            id={review.id} 
            text={review.text} 
            delete={id => this.props.delete(id)}
          />
        )}
      </ul>
    );
  }
};

export default Reviews;