import React, { Component } from 'react';
import ReviewsContainer from '../../containers/ReviewsContainer';

class Restaurant extends Component {
  render() {
    return (
      <li>
        {this.props.restaurant.text}
        <button id={this.props.restaurant.id} onClick={event => this.props.delete(event.target.id)}> X </button>
        <ReviewsContainer restaurantId={this.props.restaurant.id}/>
      </li>
    );
  }
};

export default Restaurant;
