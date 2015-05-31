
import React       from 'react';
import CartSummary from './app-cart-summary';

class Header extends React.Component{

  constructor() {
    super();
  }

  render(){
    return (
      <div className="row">
        <div className="col-sm-6">
          <h1>Lets Shop</h1>
        </div>
        <div className="col-sm-2 col-sm-push-3">
          <br />
          <CartSummary />
        </div>
      </div>
    );
  }
}

export default Header;
