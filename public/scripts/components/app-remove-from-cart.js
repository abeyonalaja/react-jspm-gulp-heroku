
import React      from 'react';
import AppActions from '../actions/app-actions';

class RemoveFromCart extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
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
