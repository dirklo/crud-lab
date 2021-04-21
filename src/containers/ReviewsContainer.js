import React, { Component } from 'react';
import { connect } from 'react-redux'
import ReviewInput from '../components/reviews/ReviewInput';
import Reviews from '../components/reviews/Reviews';

class ReviewsContainer extends Component {

  render() {
    return (
      <div>
        <ReviewInput 
          addReview={review => this.props.addReview(review)} 
          restaurantId={this.props.restaurantId} 
        />
        <Reviews 
          reviews={this.props.reviews} 
          restaurantId={this.props.restaurantId} 
          delete={id => this.props.deleteReview(id)}
        />
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addReview: (review) => dispatch({type: "ADD_REVIEW", review}),
    deleteReview: (id) => dispatch({type: "DELETE_REVIEW", id})
  }
}

const mapStateToProps = (state) => {
  return {
    reviews: state.reviews
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer);
