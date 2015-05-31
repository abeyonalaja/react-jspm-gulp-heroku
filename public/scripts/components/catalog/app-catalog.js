
import React      from 'react';
import AppActions from '../../actions/app-actions';
import AddToCart  from './app-add-to-cart';
import AppStore   from '../../stores/app-store';

const Catalog = React.createClass({

  getInitialState(){
    return {items: AppStore.getCatalog()}
  },

  render(){
    var items = this.state.items.map(function(item){
        return <tr><td>{item.title}</td><td>${item.cost}</td><td><AddToCart item={item}/></td></tr>
    });

    return(
          <table className="table tableble-hover">
            <tbody>
              {items}
            </tbody>
          </table>
    )
  }

});
 
export default Catalog;
