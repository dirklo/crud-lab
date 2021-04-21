import React, { Component } from 'react';

class Review extends Component {
  
  render() {
    return (
      <div>
        <li>
          {this.props.text}
        </li>
        <button id={this.props.id} onClick={e => this.props.delete(e.target.id)}> X </button>
      </div>
    );
  }

};

export default Review;
