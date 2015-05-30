
import Reflux from 'reflux';
import AppActions from '../actions/app-actions';

var _catalog = [
    {id:1, title: 'Widget #1', cost: 1},
    {id:2, title: 'Widget #2', cost: 2},
    {id:3, title: 'Widget #3', cost: 3}
  ];

var cartItems = [];

const AppStore = Reflux.createStore({

  listenables: [AppActions],
  getInitialState(){
    return{cartItems}
  },

  getCatalog(){
    return _catalog;
  },

  addItem(item){
    if(!item.inCart){
      item['qty'] = 1;
      item['inCart'] = true;
      cartItems.push(item);
    } else {
      cartItems.forEach((cartItem, i ) =>{
        if(cartItem.id===item.id) {
          this.increaseItem(i);
        }
      });
    }

    this.trigger(cartItems);
  },

  removeItem(index) {
    cartItems[index].inCart = false;
    cartItems.splice(index, 1);
    this.trigger(cartItems);
  },

  increaseItem(index){
    cartItems[index].qty++;
    this.trigger(cartItems);
  },

  decreaseItem(index){
    if(cartItems[index].qty>1){
      cartItems[index].qty--;
    } else {
      removeItem(index);
    }
    this.trigger(cartItems);
  }

});

export default AppStore
