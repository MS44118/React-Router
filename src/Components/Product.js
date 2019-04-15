import React, { Component } from 'react';

class Product extends Component {
  render(){
    return(
      <div>
        <p>{this.props.match.params.productNumber}</p>
      </div>
    );
  }
}

export default Product;