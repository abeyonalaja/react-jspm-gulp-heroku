
import React      from 'react';
import AppActions from '../actions/app-actions';
import AddToCart  from '../components/app-add-to-cart';
import AppStore   from '../stores/app-store';

const Catalog = React.createClass({
  getInitialState(){
    console.log("Got inital state", AppStore.getCatalog() );
    return {items: AppStore.getCatalog()}
  },

  render(){
    console.log("Catalog state", this.state)
    var items = this.state.items.map(function(item){
        return <tr><td>{item.title}</td><td>${item.cost}</td><td><AddToCart item={item}/></td></tr>
    });

    return(
          <table className="table tableble-hover">
          {items}
          </table>
    )
  }

});
 
export default Catalog;
