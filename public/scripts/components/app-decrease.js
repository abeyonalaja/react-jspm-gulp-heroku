
import React from 'react';
import AppActions from '../actions/app-actions';

class Decrease extends React.Component{
  constructor(){
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    AppActions.decreaseItem(this.props.index);
  }

  render() {
    return(
      <button onClick={this.handleClick}>-</button>
    );
  }
}

export default Decrease;
