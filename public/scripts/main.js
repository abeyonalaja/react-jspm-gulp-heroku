
import React      from 'react';
import AppActions from './actions/app-actions';
import Catalog    from './components/catalog/app-catalog';
import Cart       from './components/cart/app-cart';

let App= React.createClass({


  render() {
    return (<div>
            <h1>Lets Shop</h1>
            <Catalog />
            <h1>In Cart</h1>
            <Cart />

           </div>);
  }
})


React.render(<App />, document.body);
