
import React from 'react';
import Header from './components/header/app-header';

let Template = React.createClass({


  render(){
    return(
      <div className="container">
        <Header />
        {this.props.children}
      </div>
    );
  }
})

export default Template;
