
import React from 'react';
import Router from 'react-router-component';

let Link = Router.Link

class CartSummary extends React.Component {
  constructor(){
    super();
  }

  render(){
    return(
      <div>
        <Link href="/cart" className="btn btn-success">
        Cart items: QTY / $COST
        </Link>
      </div>
    );
  }
}

export default CartSummary;
