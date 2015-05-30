
import React      from 'react';
import AppActions from '../actions/app-actions'

class Increase extends React.Component{

  constructor(){
    super();
  }

  handleClick(){
    AppActions.increaseItem(this.props.index);
  }

  render() {
    return(
      <button onClick={this.handleClick}>+</button>
    );
  }
}

export default Increase;
