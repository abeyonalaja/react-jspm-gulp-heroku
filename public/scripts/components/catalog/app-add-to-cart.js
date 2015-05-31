
import React      from 'react';
import AppActions from '../../actions/app-actions'

class AddToCart extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    AppActions.addItem(this.props.item);
  }

  render() {
    return (
      <button onClick={ this.handleClick }>Add to Cart</button>
    );
  }
}

export default AddToCart;
