
import React      from 'react';
import AppActions from '../actions/app-actions';

class RemoveFromCart extends React.Component {
  constructor() {
    super();
  }

  handleClick(){
    AppActions.removeItem(this.props.index);
  }

  render() {
    return(
      <button onClick={this.handleClick}>x</button>
    );
  }
}

export default RemoveFromCart
