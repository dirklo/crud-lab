import React, { Component } from 'react';
import RestaurantInput from '../components/restaurants/RestaurantInput';
import Restaurants from '../components/restaurants/Restaurants';
import { connect } from 'react-redux'

class RestaurantsContainer extends Component {
  render() {
    return (
      <div>
        <RestaurantInput addRestaurant={(text) => this.props.addRestaurant(text)}/>
        <Restaurants 
          restaurants={this.props.restaurants} 
          delete={event => this.props.deleteRestaurant(event)}
          reviews={this.props.reviews} 
        />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    restaurants: state.restaurants,
    reviews: state.reviews
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addRestaurant: (text) => {
      dispatch({type: "ADD_RESTAURANT", text})
    },
    deleteRestaurant: (id) => {
      dispatch({type: "DELETE_RESTAURANT", id})
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantsContainer);
