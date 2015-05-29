
import React from 'react';
import Actions from './actions/app-actions';

class HelloWorld extends React.Component {
  render() {
    return (<div>
              <p>Hello World How ARE YOU</p>
           </div>);
  }
}


React.render(<HelloWorld />, document.body);
