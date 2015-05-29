
import React      from 'react';
import AppActions from '../actions/app-actions'

class AddToCart extends React.Component {
  constructor() {
    super();
  }

  handleClick(){
    AppActions.addItem(1);
  }

  render() {
    return (
      <button onClick={ this.handleClick }>Add to Cart</button>
    );
  }
}

export default AddToCart;
