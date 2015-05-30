
import React          from 'react';
import AppStore       from '../stores/app-store';
import RemoveFromCart from '../components/app-remove-from-cart';
import Increase       from '../components/app-increase';
import Decrease       from '../components/app-decrease';
import Reflux     from 'reflux';

let Cart = React.createClass({
  
  mixins: [Reflux.connect(AppStore)],
  getInitialState(){
    this.state = {items:[]}
  },

  render(){
    let total = 0;
    let items = this.state.cartItems.map((item, i) => {
      let subtotal = item.cost * item.qty;
      total += subtotal;

      return (
          <tr key={i}>
            <td><RemoveFromCart index={i} /></td>
            <td>{item.title}</td>
            <td>{item.qty}</td>
            <td>
              <Increase index={i} />
              <Decrease index={i} />
            </td>
            <td>${subtotal}</td>
          </tr>
          )
      })


      return(
          <table className="table tableble-hover">
          <thead>
              <tr>
                <th></th>
                <th>Item</th>
                <th>Qty</th>
                <th></th>
                <th>Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {items}
            </tbody>
            <tfoot>
              <tr>
                <td colSpan="4" className="text-right">Total</td>
                <td>${total}</td>
              </tr>
            </tfoot>
          </table>
        )
    }
});

export default Cart;
